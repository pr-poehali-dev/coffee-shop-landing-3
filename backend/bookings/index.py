import json
import os
import psycopg2


def handler(event: dict, context) -> dict:
    '''
    Business: Принимает заявки на бронирование столика и сохраняет их в базу данных
    Args: event - dict с httpMethod, body (name, phone, date, time, guests, notes)
          context - объект с request_id
    Returns: HTTP response dict со статусом сохранения заявки
    '''
    method = event.get('httpMethod', 'GET')

    cors = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400',
    }

    if method == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors, 'body': ''}

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {**cors, 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Method not allowed'}),
        }

    body = json.loads(event.get('body') or '{}')
    name = (body.get('name') or '').strip()
    phone = (body.get('phone') or '').strip()
    date = (body.get('date') or '').strip()
    time = (body.get('time') or '').strip()
    guests = body.get('guests') or 1
    notes = (body.get('notes') or '').strip()

    if not name or not phone or not date or not time:
        return {
            'statusCode': 400,
            'headers': {**cors, 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Заполните имя, телефон, дату и время'}),
        }

    name = name.replace("'", "''")
    phone = phone.replace("'", "''")
    date = date.replace("'", "''")
    time = time.replace("'", "''")
    notes = notes.replace("'", "''")
    try:
        guests = int(guests)
    except (ValueError, TypeError):
        guests = 1

    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()
    cur.execute(
        "INSERT INTO bookings (name, phone, booking_date, booking_time, guests, notes) "
        f"VALUES ('{name}', '{phone}', '{date}', '{time}', {guests}, '{notes}') RETURNING id"
    )
    booking_id = cur.fetchone()[0]
    conn.commit()
    cur.close()
    conn.close()

    return {
        'statusCode': 200,
        'headers': {**cors, 'Content-Type': 'application/json'},
        'body': json.dumps({'success': True, 'id': booking_id}),
    }
