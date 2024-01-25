import React, { useEffect, useState } from 'react';

const CurrentDateTime = () => {
    const [formattedDateTime, setFormattedDateTime] = useState('');

    useEffect(() => {
        // Function to update the date and time
        const updateDateTime = () => {
            const currentDateTime = new Date();
            const options = {
                weekday: 'short',
                day: 'numeric',
                month: 'short',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true,
            };
            const formatted = currentDateTime.toLocaleDateString('en-US', options);
            setFormattedDateTime(formatted);
        };

        // Initial update
        updateDateTime();

        // Set up an interval to update every second
        const intervalId = setInterval(updateDateTime, 1000);

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <p>{formattedDateTime}</p>
        </div>
    );
};

export default CurrentDateTime;
