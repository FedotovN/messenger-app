import moment from "moment"
import { locale } from "@/i18n"
import { Timestamp } from "firebase/firestore"
function filterDateFromJSONString(stringified: string, options?) {
    const date = (new Date(JSON.parse(stringified))),
          o = {hour:'2-digit', minute: '2-digit'}
    return Intl.DateTimeFormat('Ru-ru', {...o, ...options}).format(date)
}
function getTimeFromDate(date: Date | Timestamp) {
    if(date instanceof Timestamp) date = date.toDate()
    const currTimestamp = +new Date(),
          diff = currTimestamp - +date,
          minuteMs = 60000,
          dayMs =  minuteMs * 60 * 24,
          unformattedRes = moment(date)
    if(diff > dayMs) {
        if(diff < dayMs * 7)
            return unformattedRes.locale(locale).format('dddd')
        return unformattedRes.locale(locale).fromNow()
    }
    return unformattedRes
        .locale(locale)
        .format('HH:mm')
}

export { filterDateFromJSONString, getTimeFromDate }