const cyrillicPattern = new RegExp(/^[а-яА-ЯЁё]+$/i)

const validateName = [
  (value) => {
    if (value?.length >= 3 && value.match(cyrillicPattern)) {
      return true
    } else {
      return "Имя должно содержать как минимум 3 символа кириллицы"
    }
  },
]

export { validateName }
