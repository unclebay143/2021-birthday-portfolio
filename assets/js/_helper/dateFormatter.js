const formatDate = ( date )=>{
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    // Convert Current Day to Day, Month date, year format
    const dueDate = new Date(date).toLocaleDateString("en-US", options);
    // Return formated date
    return dueDate;
}

export {
    formatDate
}