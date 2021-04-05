class DateHelper {

    dateToWeekDay(data) {
        let dataString = data.toUTCString();
        return dataString.substring(0, dataString.length-17);
    }

}


export default new DateHelper();