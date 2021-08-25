import moment from 'moment'

export const getDefaultLocale = () => {
  if (typeof window === 'undefined') return null

  const { userLanguage, language } = window.navigator
  const locale = (userLanguage || language || 'en').substr(0, 2)
  moment.locale(locale)
  setJaMonth(moment)
  return locale
}

export const setJaMonth = (moment) => {
  moment.updateLocale('ja', {
    months: [
      '1月', '2月', '3月','4月', '5月', '6月',
      '7月', '8月', '9月', '10月', '11月', '12月'
    ]
  })
}
