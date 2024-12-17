export type TMods = Record<string, boolean | string | undefined>

export function classNames(
    cls: string,
    mods: TMods = {},
    additional: Array<string | undefined> = []
): string {
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([cls]) => cls)
    ].join(' ')
}
