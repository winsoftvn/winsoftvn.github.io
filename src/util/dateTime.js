const handleDatetime = (datetime) => {
    const DATE_OPTIONS = {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
    };
    const datenow = new Date(datetime);
    const date = datenow.toLocaleDateString("en-GB");
    const time = datenow.getHours() +":"+ datenow.getMinutes();
    return date + " - " + time;
};
export default handleDatetime;
