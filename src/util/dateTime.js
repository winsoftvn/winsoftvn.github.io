const handleDatetime = (datetime) => {
    const datenow = new Date(datetime);
    const date = datenow.toLocaleDateString("en-GB");
    const time = datenow.getHours() +" : "+ datenow.getMinutes();
    return date + " - " + time;
};
export default handleDatetime;
