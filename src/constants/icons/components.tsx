export enum ComponentsIcons {
  EYE = 'EYE',
  EYE_OFF = 'EYE_OFF',
  CHEVRON = 'CHEVRON',
}

export const componentsIcons = {
  [ComponentsIcons.EYE]: (
    <>
      <path
        id="Vector"
        d="M14.12 14.12C13.55 14.68 12.79 15 12 15C11.2 15 10.44 14.68 9.87 14.12C9.31 13.55 9 12.79 9 12C9 11.2 9.31 10.44 9.87 9.87C10.44 9.31 11.2 9 12 9C12.79 9 13.55 9.31 14.12 9.87C14.68 10.44 15 11.2 15 12C15 12.79 14.68 13.55 14.12 14.12Z"
        stroke="#999999"
        strokeOpacity="1.000000"
        strokeWidth="2.000000"
        strokeLinejoin="round"
      />
      <path
        id="Vector"
        d="M12 5C16.47 5 20.26 7.94 21.54 12C20.26 16.05 16.47 19 12 19C7.52 19 3.73 16.05 2.45 12C3.73 7.94 7.52 5 12 5Z"
        stroke="#999999"
        strokeOpacity="1.000000"
        strokeWidth="2.000000"
        strokeLinejoin="round"
      />
    </>
  ),

  [ComponentsIcons.EYE_OFF]: (
    <>
      <path
        id="Vector"
        d="M13.87 18.82C13.25 18.94 12.62 19 12 19C7.52 19 3.73 16.05 2.45 12C2.8 10.9 3.32 9.88 4.02 8.97M14.12 14.12L9.87 9.87C10.44 9.31 11.2 9 12 9C12.79 9 13.55 9.31 14.12 9.87C14.68 10.44 15 11.2 15 12C15 12.79 14.68 13.55 14.12 14.12L17.41 17.41M9.87 9.88L6.58 6.58L3 3M6.58 6.58C8.2 5.54 10.08 4.99 12 5C16.47 5 20.26 7.94 21.54 12C20.83 14.23 19.37 16.14 17.41 17.41L21 "
        stroke="#999999"
        strokeOpacity="1.000000"
        strokeWidth="2.000000"
        strokeLinejoin="round"
      />
    </>
  ),

  [ComponentsIcons.CHEVRON]: (
    <>
      <path
        id="Vector"
        d="M24 19L15 10L6 19"
        stroke="rgb(153, 153, 153)"
        strokeOpacity="1.000000"
        strokeWidth="3.000000"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </>
  ),

  // [ComponentsIcons.LOGO]: <></>,
};
