export interface ShowPageProps {
    product: any
  }


export interface ShowPageChildProps {
  product: any,
  selected: any,
  setSelected: any
  handleOnAddToCart: any,
  setNumberToAdd: any,
  numberToAdd: number,
  slideNumber: number,
  setSlideNumber: any,
  upcomingItems?: any,
  isNewProduct: boolean,
}

export interface CountdownTimerProps {
  timeLeftObj: {
    days: number,
    hours: number,
    minutes: number,
    seconds: number
  }
}

export interface UpcomingDropPreviewProps {
  timeLeftObj: {
    days: number,
    hours: number,
    minutes: number,
    seconds: number
  },
  products: any,
  dropTitle: string
}

export interface EmailFormProps {
  isSidebar: boolean,
  placeholder?: string,
}

export type TimeLeftObj = {
  days: number,
  hours: number,
  minutes: number,
  seconds: number
}
