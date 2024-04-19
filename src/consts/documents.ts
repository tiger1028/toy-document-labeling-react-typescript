export interface DocumentType {
  id: number;
  title: string;
  body: string;
  url: string;
  labels?: string[];
}

export const INITIAL_DOCUMENTS: DocumentType[] = [
  {
    id: 0,
    title: "Video: How China and India Help Russia's Economy by Buying Oil",
    body: "Russia is making as much as $20 billion in average monthly oil sales this year, compared to $14.6 billion last year ",
    url: "https://www.wsj.com/video/series/news-explainers/how-china-and-india-help-russias-economy-by-buying-oil/1DFAFAD1-8AAF-44B7-B265-599DD90D1C97",
  },

  {
    id: 1,
    title:
      "Chinese Investment Bank CICC Plans Large Capital Raise to Bolster Business",
    body: "Chinese Investment Bank CICC Plans Large Capital Raise to Bolster Business\nBank shares fell after it said it wants to raise as much as $3.9 billion amid competition from foreign rivals",
    url: "https://www.wsj.com/articles/chinese-investment-bank-cicc-plans-large-capital-raise-to-bolster-business-11663156089",
  },

  {
    id: 2,
    title: "US Senate to Wrestle With Bill That Would Boost Taiwan Ties ",
    body: "US lawmakers will debate a bill Wednesday to boost ties with Taiwan and give it more military hardware to deter a Chinese invasion. In Washington, where politicians often jockey to show who's toughest on Beijing, the legislation is making the White House queasy.",
    url: "https://www.bloomberg.com/news/articles/2022-09-14/us-senate-to-wrestle-with-bill-that-would-boost-ties-with-taiwan?leadSource=uverify%20wall",
  },

  {
    id: 3,
    title: "Bank of East Asia China Executive Detained on Bribe Charge ",
    body: "A senior executive of Bank of East Asia Ltd.'s China unit has been detained on suspicion of accepting bribes, according to a report ",
    url: "https://www.bloomberg.com/news/articles/2022-09-14/bank-of-east-asia-executive-in-china-detained-on-bribery-charge?leadSource=uverify%20wall",
  },

  {
    id: 4,
    title: "How China became big business for Twitter ",
    body: "A Reuters review of publicly available government tenders, budget documents and promoted tweets from 2020 to 2022 shows local government authorities and Chinese Communist Party propaganda offices for cities, provinces and even districts across the country have flocked to Twitter to buy ads.",
    url: "https://www.reuters.com/technology/block-blue-ticks-how-china-became-big-business-twitter-2022-09-13/",
  },

  {
    id: 5,
    title:
      "U.S. weighs China sanctions to deter Taiwan action, Taiwan presses EU",
    body: "The United States is considering options for a sanctions package against China to deter it from invading Taiwan, with the European Union coming under diplomatic pressure from Taipei to do the same.",
    url: "https://www.reuters.com/world/asia-pacific/exclusive-us-considers-china-sanctions-deter-taiwan-action-taiwan-presses-eu-2022-09-13/",
  },

  {
    id: 6,
    title: "Germany drawing up new China trade policy, vows 'no more naivety' ",
    body: "Germany's economy minister said on Tuesday the government was working on a new trade policy with China to reduce dependence on Chinese raw materials, batteries and semiconductors.",
    url: "https://www.reuters.com/world/europe/germanys-new-china-policy-will-not-be-naive-economy-minister-2022-09-13/",
  },

  {
    id: 7,
    title: "China's EV Battery Runner-Up is Worth a Look",
    body: "The public listing of CALB, China's third largest EV battery maker, could be a bright spot in a tough year for Hong Kong.",
    url: "https://www.wsj.com/articles/chinas-ev-battery-runner-up-is-worth-a-look-11663071162",
  },

  {
    id: 8,
    title: "US Chip Curbs Will Highlight Cracks in China's AI Strategy",
    body: "Computing power is critical to artificial intelligence, and Washington is taking that away from its fiercest rival.",
    url: "https://www.bloomberg.com/opinion/articles/2022-09-12/us-chip-curbs-will-highlight-cracks-in-china-s-ai-strategy?leadSource=uverify%20wall",
  },

  {
    id: 9,
    title: "Biden to Boost US Biomanufacturing to Compete with China ",
    body: "President Joe Biden is poised to sign an executive order on Monday to help expand US biomanufacturing and reduce reliance on China.",
    url: "https://www.bloomberg.com/news/articles/2022-09-10/biden-seeks-boost-for-us-biomanufacturing-to-compete-with-china?leadSource=uverify%20wall",
  },

  {
    id: 10,
    title:
      "The Guardian: Imperial College to shut joint research ventures with Chinese defence firms ",
    body: "Exclusive: two Chinese-sponsored aerospace research centres to close after warnings of ‘sleepwalking' into aiding Chinese military.",
    url: "https://www.theguardian.com/world/2022/sep/11/imperial-college-to-shut-joint-research-ventures-with-chinese-defence-firms",
  },

]