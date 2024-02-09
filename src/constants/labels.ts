interface LabelImage {
    url: string;
    alt: string;
    description: string;
}

export interface Label {
    description: string;
    images: LabelImage[];
}

export const LABELS: Label[] = [
    {
        description: "Máscara",
        images: [
            {
                url: "/required-mask.png",
                alt: "Obrigatório",
                description: "Obrigatório",
            },
            {
                url: "/recommended-mask.png",
                alt: "Recomendado",
                description: "Recomendado",
            },
        ],
    },
    {
        description: "Toalha",
        images: [
            {
                url: "/required-towel.png",
                alt: "Obrigatório",
                description: "Obrigatório",
            },
            {
                url: "/recommended-towel.png",
                alt: "Recomendado",
                description: "Recomendado",
            },
        ],
    },
    {
        description: "Bebedouro",
        images: [
            {
                url: "/partial-fountain.png",
                alt: "Parcial",
                description: "Parcial",
            },
            {
                url: "/forbidden-fountain.png",
                alt: "Proibido",
                description: "Proibido",
            },
        ],
    },
    {
        description: "Vestiários",
        images: [
            {
                url: "/required-lockerroom.png",
                alt: "Liberado",
                description: "Liberado",
            },
            {
                url: "/partial-lockerroom.png",
                alt: "Parcial",
                description: "Parcial",
            },
            {
                url: "/forbidden-lockerroom.png",
                alt: "Proibido",
                description: "Proibido",
            },
        ],
    },
];
