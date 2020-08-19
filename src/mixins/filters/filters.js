import { date } from 'quasar'

export default {
  filters: {
    formatDate: dateToFormat => {
      dateToFormat = date.formatDate(dateToFormat, 'DD-MM-YYYY', {
        months: [
          'Janeiro',
          'Fevereiro',
          'Março',
          'Abril',
          'Maio',
          'Junho',
          'Julho',
          'Agosto',
          'Setembro',
          'Outubro',
          'Novembro',
          'Dezembro'
        ]
      })
    }
  }
}