function filterDateFromJSONString(stringified: string, options?) {
    const date = (new Date(JSON.parse(stringified))),
          o = {hour:'2-digit', minute: '2-digit'}
    return Intl.DateTimeFormat('Ru-ru', {...o, ...options}).format(date)
}

export { filterDateFromJSONString }