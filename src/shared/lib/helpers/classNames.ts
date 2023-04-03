type Mods = Record<string, boolean>

export function classNames(
  cls: string,
  mods: Mods = {},
  addition: string[] = []
): string {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([className]) => className)
    ,
    ...addition.filter(Boolean)
  ].join(' ')
}


