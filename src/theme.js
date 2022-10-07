// Constantes
export const SECONDARY_COLOR = "#FFF";
export const SPACING = 8;

// Mixins

/* Funcionalidade para o em da unidade de media de tela
  const round2 = (n) => Math.round(n * 100) / 100;
  const em = (n) => round2(n) + 'em'; */

const generateNClasses = (name, number, calc) => {
    let classes = {};

    for (let i = 0; i <= number; i++) {
        let className = name.replace("{i}", i);
        classes[className] = calc(i);
    }

    return classes;
};

const spacing = (num) => (num ? num * SPACING + "px" : "0");

// Tema

export default {
    spacing: SPACING,
    palette: {
        sidebarBackgroundColor: "#313443",
        activeSidebarLinkColor: "#22252E",
        hoverSidebarLinkColor: "#22252E",
        activeLinkColor: "#98D7EC",
        tooltipBackgroundColor: "#313443"
    },
    typography: {
        fontFamily: "Raleway",
    },

    overrides: {
        // Especifique aqui os objetos de estilo para as substituir os do material-ui
    },

    global: {
        ".text-overflow-ellipsis": {
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
            display: "block",
        },
        ".hover-icone": {
            "&:hover": {
                stroke: SECONDARY_COLOR,
                cursor: "pointer",
            },
        },
        ".icone-pequeno": { height: "16px", width: "16px" },
        ".icone-medio": { height: "22px", width: "22px" },
        ".icone-grande": { height: "48px", width: "48px" },
        ".italic": {
            fontStyle: "italic",
        },
        ".bold": {
            fontWeight: "bold",
        },
        ".float-right": {
            display: "block",
            float: "right",
        },
        ...generateNClasses(".mb-{i}", 8, (i) => ({
            marginBottom: spacing(i * 0.5),
        })),
        ...generateNClasses(".mt-{i}", 8, (i) => ({ marginTop: spacing(i * 0.5) })),
        ...generateNClasses(".mr-{i}", 8, (i) => ({
            marginRight: spacing(i * 0.5),
        })),
        ...generateNClasses(".ml-{i}", 8, (i) => ({
            marginLeft: spacing(i * 0.5),
        })),
        ".aviso-indicador": {
            display: "inline-block",
            borderRadius: "50%",
            width: "8px",
            height: "8px",
            verticalAlign: "inherit",
        },
        ...generateNClasses(".p-{i}", 8, (i) => ({ padding: spacing(i * 0.5) })),
        ...generateNClasses(".pb-{i}", 8, (i) => ({
            paddingBottom: spacing(i * 0.5),
        })),
        ...generateNClasses(".pt-{i}", 8, (i) => ({
            paddingTop: spacing(i * 0.5),
        })),
        ".MuiDialog-paper": {
            margin: 16,
        },
    },
};