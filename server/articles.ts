export const articleList : Array<Article> = [
  {
    title: 'Slik forsøker svindlerne å lure til seg BankID-en din',
    published: new Date('2020-12-09T16:00:57Z'),
    site: 'DinSide',
    adGroup: 'GDPR ute av kontroll',
    bids: 100446,
    spending: 13871,
    winRate: 0.97,
    impressions: 97025,
    clicks: 51,
    ctr: 0.005
  },
  {
    title: 'Ingen smarttelefon? Ingen bussbillett!',
    published: new Date('2020-11-12T16:00:57Z'),
    site: 'VG',
    adGroup: 'GDPR ute av kontroll',
    bids: 94517,
    spending: 7246,
    winRate: 0.63,
    impressions: 59755,
    clicks: 76,
    ctr: 0.013
  },
  {
    title: 'Klarer DNA-testene å finne ut at Emil og Silas er tvillinger?',
    published: new Date('2021-01-30T16:00:57Z'),
    site: 'TV2',
    adGroup: 'GDPR ute av kontroll',
    bids: 33335,
    spending: 2159,
    winRate: 0.92,
    impressions: 30773,
    clicks: 59,
    ctr: 0.019
  },
  {
    title: 'Brøt personvernet for 400 000',
    published: new Date('2021-02-24T16:00:57Z'),
    site: 'Dagbladet',
    adGroup: 'GDPR ute av kontroll',
    bids: 32103,
    spending: 5230,
    winRate: 0.93,
    impressions: 29885,
    clicks: 35,
    ctr: 0.012
  },
  {
    title: 'Slik søker du i skattelistene',
    published: new Date('2020-12-08T16:00:57Z'),
    site: 'DinSide',
    adGroup: 'GDPR ute av kontroll',
    bids: 13842,
    spending: 1821,
    winRate: 0.91,
    impressions: 12596,
    clicks: 14,
    ctr: 0.011
  }
]


type Article = {
  title: string
  published: Date
  site: string
  adGroup: string
  bids: number
  spending: number
  winRate: number
  impressions: number
  clicks: number
  ctr: number
}

export const isArticle = (article: any): article is Article  => {
  return (<Article>article).title !== undefined &&
      (<Article>article).published !== undefined &&
      (<Article>article).site !== undefined &&
      (<Article>article).adGroup !== undefined &&
      (<Article>article).bids !== undefined &&
      (<Article>article).spending !== undefined &&
      (<Article>article).winRate !== undefined &&
      (<Article>article).impressions !== undefined &&
      (<Article>article).clicks !== undefined &&
      (<Article>article).ctr !== undefined &&
      Object.entries(article).length === 10
}
