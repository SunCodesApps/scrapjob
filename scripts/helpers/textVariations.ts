function randomChance(probability: number): boolean {
  return Math.random() < probability
}

function addExtraSpaces(text: string): string {
  return text.replace(/ /g, () =>
    randomChance(0.15) ? '  ' : ' ',
  )
}

function changeCase(text: string): string {
  const option = Math.floor(Math.random() * 3)

  if (option === 0) {
    return text
  }

  if (option === 1) {
    return text.toLowerCase()
  }

  return text.toUpperCase()
}

function addTrailingSpace(text: string): string {
  return randomChance(0.3) ? `${text} ` : text
}

function addPunctuation(text: string): string {
  if (!randomChance(0.2)) {
    return text
  }

  if (text.endsWith('.')) {
    return text
  }

  return `${text}.`
}

export function varyTitle(title: string): string {
  let result = title

  if (randomChance(0.25)) {
    result = changeCase(result)
  }

  if (randomChance(0.2)) {
    result = addExtraSpaces(result)
  }

  if (randomChance(0.2)) {
    result = addTrailingSpace(result)
  }

  return result
}

export function varyDescription(
  description: string,
): string {
  let result = description

  if (randomChance(0.25)) {
    result = changeCase(result)
  }

  if (randomChance(0.3)) {
    result = addExtraSpaces(result)
  }

  if (randomChance(0.2)) {
    result = addTrailingSpace(result)
  }

  if (randomChance(0.2)) {
    result = addPunctuation(result)
  }

  return result
}