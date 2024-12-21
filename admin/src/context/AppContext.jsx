import { createContext } from "react";


export const AppContext = createContext()

const AppContextProvider = (props) => {

    const currency = import.meta.env.VITE_CURRENCY
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    // Function to format the date eg. ( 20_01_2000 => 20 Jan 2000 )
    const slotDateFormat = (slotDate) => {
        if (!slotDate) return ''; // Handle undefined or null slotDate

        // Split the slotDate string
        const [day, month, year] = slotDate.split('_');

        // Ensure all parts are valid
        if (!day || !month || !year) return 'Invalid date';

        // Create a Date object
        const date = new Date(year, month - 1, day); // month - 1 because months are 0-based in JS

        // Format the date to a readable format
        return date.toLocaleDateString(undefined, {
            weekday: 'long', // e.g., "Saturday"
            day: 'numeric', // e.g., "14"
            month: 'long', // e.g., "December"
            year: 'numeric', // e.g., "2024"
        });
    };


    // Function to calculate the age eg. ( 20_01_2000 => 24 )
    const calculateAge = (dob) => {
        const today = new Date()
        const birthDate = new Date(dob)
        let age = today.getFullYear() - birthDate.getFullYear()
        return age
    }

    const value = {
        backendUrl,
        currency,
        slotDateFormat,
        calculateAge,
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider