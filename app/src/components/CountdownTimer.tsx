import React, { useState, useEffect, useMemo, useCallback } from 'react';

// --- TypeScript Interfaces ---
interface TimeBoxProps {
    value: number;
    label: string;
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

interface CountdownTimerProps {
    /** The target date and time for the countdown to end. Can be a Date object or an ISO string. */
    targetDate: string | Date;
}

// A single styled box for displaying a time unit (e.g., Days, Hours)
const TimeBox: React.FC<TimeBoxProps> = ({ value, label }) => {
    // Ensures the number is always two digits (e.g., 03 instead of 3)
    const formattedValue = String(value).padStart(2, '0');

    return (
        <div className="flex flex-col items-center justify-center bg-[#B11700] text-white rounded-[4px] p-[13px] w-24 h-28 shadow-md">
            <span className="text-[38px] font-bold tracking-wider">{formattedValue}</span>
            <span className="text-[16px] mt-[8px]">{label}</span>
        </div>
    );
};

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate: targetDateProp }) => {
    // useMemo ensures the Date object is only created when the prop changes
    const targetDate = useMemo(() => new Date(targetDateProp), [targetDateProp]);

    const calculateTimeLeft = useCallback((): TimeLeft => {
        const difference = +targetDate - +new Date();
        let timeLeft: TimeLeft;

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            // If the countdown is over, display all zeros
            timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        return timeLeft;
    }, [targetDate]);

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    // This derived state is true when the countdown has finished
    const isTimeUp = useMemo(() => {
        return timeLeft.days <= 0 && timeLeft.hours <= 0 && timeLeft.minutes <= 0 && timeLeft.seconds <= 0;
    }, [timeLeft]);

    useEffect(() => {
        // If the time is already up when the component mounts, don't start the timer
        if (isTimeUp) {
            return;
        }

        // Set up an interval to update the countdown every second
        const timerInterval = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Cleanup function: clear the interval when the component unmounts or time is up
        return () => clearInterval(timerInterval);
    }, [isTimeUp, calculateTimeLeft]);


    return (
        <div>
            <h2 className="text-[22px] font-[500] font-bold">
                {isTimeUp ? "Submissions are closed" : "Coding Challenge Ends In"}
            </h2>
            <div className="flex justify-center space-x-[12px] mt-[24px]">
                <TimeBox value={timeLeft.days} label="Days" />
                <TimeBox value={timeLeft.hours} label="Hours" />
                <TimeBox value={timeLeft.minutes} label="Minutes" />
                <TimeBox value={timeLeft.seconds} label="Seconds" />
            </div>
        </div>
    );
};

export default CountdownTimer;

