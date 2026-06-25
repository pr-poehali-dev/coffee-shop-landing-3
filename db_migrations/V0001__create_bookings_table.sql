CREATE TABLE IF NOT EXISTS bookings (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    booking_date DATE NOT NULL,
    booking_time VARCHAR(10) NOT NULL,
    guests INTEGER NOT NULL DEFAULT 1,
    notes TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);