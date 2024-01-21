const formatClass = (className) => {
  switch (className) {
    case "mage": {
      return "Волшебник"
    }
    case "paladin": {
      return "Храмовник"
    }
    case "psionic": {
      return "Мистик"
    }
    case "warlock": {
      return "Демонолог"
    }
    case "priest": {
      return "Жрец"
    }
    case "bard": {
      return "Бард"
    }
    case "stalker": {
      return "Разведчик"
    }
    case "necromancer": {
      return "Некромант"
    }
    case "druid": {
      return "Язычник"
    }
    case "warrior": {
      return "Воин"
    }
    case "engineer": {
      return "Инженер"
    }
  }
}

const formatRace = (race) => {
  switch (race) {
    case "undead": {
      return "Восставшие"
    }
    case "kania": {
      return "Канийцы"
    }
    case "hadagan": {
      return "Хадаганцы"
    }
    case "gibberling": {
      return "Гибберлинги"
    }
    case "elf": {
      return "Эльфы"
    }
    case "aed": {
      return "Аэды"
    }
    case "praiden": {
      return "Прайдены"
    }
    case "orc": {
      return "Орки"
    }
  }
}

const formatBinding = (binding) => {
  switch (binding) {
    case "BindOnEquip": {
      return "Привязывается, если экипировать"
    }
    case "BindOnPickup": {
      return "Привязывается при появлении в сумке"
    }
  }
}

const formatSlotName = (slot) => {
  switch (slot) {
    case "HELM": {
      return "Шлем"
    }
    case "ARMOR": {
      return "Доспех"
    }
    case "PANTS": {
      return "Поножи"
    }
    case "BOOTS": {
      return "Ботинки"
    }
    case "MANTLE": {
      return "Наплечники"
    }
    case "GLOVES": {
      return "Перчатки"
    }
    case "BRACERS": {
      return "Наручи"
    }
    case "BELT": {
      return "Пояс"
    }
    case "RING": {
      return "Кольцо"
    }
    case "EARRINGS": {
      return "Серьга"
    }
    case "NECKLACE": {
      return "Ожерелье"
    }
    case "CLOAK": {
      return "Плащ"
    }
    case "SHIRT": {
      return "Рубашка"
    }
    case "TWOHANDED": {
      return "Для двух рук"
    }
    case "RANGED": {
      return "Специальное оружие"
    }
    case "AMMO": {
      return "Слёзы дракона"
    }
    case "TABARD": {
      return "Накидка"
    }
    case "TRINKET": {
      return "Амулет"
    }
    case "LIFESTYLEHEAD": {
      return "Маска"
    }
    case "LIFESTYLEBACK": {
      return "Украшение"
    }
    case "LIFESTYLESUIT": {
      return "Костюм"
    }
    case "LIFESTYLESHOULDER": {
      return "Наплечное украшение"
    }
    case "LIFESTYLEPET": {
      return "Питомец"
    }
    case "ARTIFACT": {
      return "Артефакт"
    }
    case "RUNE": {
      return "Руна"
    }
    case "LSWEAPON": {
      return "Святое оружие"
    }
    case "DEPOSITBOX": {
      return "Сейф"
    }
    case "DEATHINSURANCE": {
      return "Ладанка"
    }
    case "BAG": {
      return "Сумка"
    }
    case "LIFESTYLEUNDERWEAR": {
      return "Бельё"
    }
    case "MAINHAND": {
      return "Для правой руки"
    }
    case "OFFHAND": {
      return "Для левой руки"
    }
  }
}

const formatStatName = (stat) => {
  switch (stat) {
    case "rage": {
      return "Решимость"
    }
    case "lifesteal": {
      return "Кровожадность"
    }
    case "not_bubble": {
      return "Осторожность"
    }
    case "plain": {
      return "Мастерство"
    }
    case "power": {
      return "Могущество"
    }
    case "stamina": {
      return "Выносливость"
    }
    case "finisher": {
      return "Беспощадность"
    }
    case "heal_modifier": {
      return "Живучесть"
    }
    case "vitality": {
      return "Стойкость"
    }
    case "crit_chance": {
      return "Удача"
    }
    case "mastery": {
      return "Господство"
    }
    case "physical": {
      return "к броне"
    }
    case "nature": {
      return "к ядам и болезням"
    }
    case "divine": {
      return "к божественному"
    }
    case "elemental": {
      return "к стихиям"
    }
  }
}

const formatItemQuality = (quality) => {
  return quality?.toLowerCase().replace("_", "-")
}

const convertMsToDays = (ms) => {
  return ms / (24 * 60 * 60 * 1000)
}

export { formatClass, formatRace, formatBinding, formatSlotName, formatStatName, formatItemQuality, convertMsToDays }
