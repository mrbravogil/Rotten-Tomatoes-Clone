const tvShows = [
  {
    id: "tv01",
    title: "Olympo",
    startYear: 2025,
    description: "A teen drama set at a high-performance sports academy in the Pyrenees, following young athletes facing ambition, pressure and secrets.",
    image: "https://m.media-amazon.com/images/M/MV5BODUwMTgxOWItMTU3MS00MDg0LTliYjItMWQ1NmYyZDRkMzI0XkEyXkFqcGc@._V1_.jpg",
    trailer: "https://www.youtube.com/watch?v=Cw8hSXWtLRw&pp=0gcJCfwAo7VqN5tD",
    genres: [], // Relación con géneros (vacío por ahora)
    country: "ES",
    language: "es",
  },
  {
    id: "tv02",
    title: "Ironheart",
    startYear: 2025,
    description: "Marvel miniseries about Riri Williams, an MIT student who builds her own Iron Man–style suit, confronting tech and magic in Chicago.",
    image: "https://m.media-amazon.com/images/M/MV5BN2EzMGZhOTktYjVhZi00NmIwLWIxZDEtNWUxZTQyNjhkYWQ4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailer: "https://www.youtube.com/watch?v=WpW36ldAqnM",
    genres: [],
    country: "US",
    language: "en",
  },
  {
    id: "tv03",
    title: "Countdown",
    startYear: 2025,
    description: "Crime drama starring Jensen Ackles as an LAPD detective recruited into a secret task force to stop a large-scale conspiracy.",
    image: "https://m.media-amazon.com/images/M/MV5BMzJjODI5ZTQtMTIxNy00MjY0LTlhNDgtNzk0YjZjM2Q1ZDIyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailer: "https://www.youtube.com/watch?v=SwSt1L3_WEA",
    genres: [],
    country: "US",
    language: "en",
  },
  {
    id: "tv04",
    title: "Long Bright River",
    startYear: 2025,
    description: "Based on Liz Moore's novel; a police officer investigates her missing sister in a city riddled with addiction and inequality.",
    image: "https://m.media-amazon.com/images/M/MV5BZDliMDVlOTItNTk0NS00YmUxLWI4NzktYjI0ODZmNDM4OTVlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailer: "https://www.youtube.com/watch?v=3mu-lFJKBws",
    genres: [],
    country: "US",
    language: "en",
  },
  {
    id: "tv05",
    title: "Malditos",
    startYear: 2025,
    description: "Spanish supernatural thriller about a town haunted by a curse tied to its dark past.",
    image: "https://m.media-amazon.com/images/M/MV5BODM5MDYxNDQtOWRkNC00OGE0LWFkZjMtMTE2ZjhjMDg5NTViXkEyXkFqcGc@._V1_.jpg",
    trailer: "https://www.youtube.com/watch?v=Wl3m0g8HKS4",
    genres: [],
    country: "ES",
    language: "es",
  },
  {
    id: "tv06",
    title: "Smoke",
    startYear: 2025,
    description: "A gritty drama about firefighters confronting personal demons while saving lives.",
    image: "https://m.media-amazon.com/images/M/MV5BMzMwMTQ0NmYtOTc3MC00YzE2LWEwYTQtMjg1OGU0YmM3NWU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailer: "https://www.youtube.com/watch?v=bdX456spjeA",
    genres: [],
    country: "US",
    language: "en",
  },
  {
    id: "tv07",
    title: "When No One Sees Us",
    startYear: 2025,
    description: "A psychological thriller series centered on a group of teens in crisis and the secrets they hide.",
    image: "https://resizing.flixster.com/fnn02mGAyN6NH-LcZAt6b9iuXa4=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p28426454_b_v13_ad.jpg",
    trailer: "https://www.youtube.com/watch?v=o0si9Hg-xLU",
    genres: [],
    country: "UK",
    language: "en",
  },
  {
    id: "tv08",
    title: "The Waterfront",
    startYear: 2025,
    description: "Detective noir set around a coastal city’s rundown waterfront, combining crime drama and social commentary.",
    image: "https://m.media-amazon.com/images/M/MV5BYjllZDZiNzUtZTE5MS00MTNjLWJlMDAtZGY4YjM5YTVkM2UxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailer: "https://www.youtube.com/watch?v=vE-oYo1hIEs",
    genres: [],
    country: "CA",
    language: "en",
  },
  {
    id: "tv09",
    title: "A Decent Man",
    startYear: 2025,
    description: "A man’s careful life is unraveled when a past crime resurfaces and threatens his family.",
    image: "https://images.justwatch.com/poster/332022313/s718/a-decent-man.jpg",
    trailer: "https://www.filmaffinity.com/en/evideos.php?movie_id=816630",
    genres: [],
    country: "AU",
    language: "en",
  },
  {
    id: "tv10",
    title: "Miss Fallaci",
    startYear: 2025,
    description: "Biographical series about Italian journalist Oriana Fallaci, covering her controversial interviews and experiences.",
    image: "https://m.media-amazon.com/images/M/MV5BYTU0ZGFkNGYtODhiZC00YmUwLWIyYzctOWQ3MWQzZDFjNjgxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailer: "https://www.youtube.com/watch?v=OOrmsGGWu0M",
    genres: [],
    country: "IT",
    language: "it",
  },
  {
    id: "tv11",
    title: "The Eastern Gate",
    startYear: 2025,
    description: "Mystical thriller about a hidden manuscript that links an ancient cult to modern-day conspiracies.",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/The_Eastern_Gate_Max.jpeg/250px-The_Eastern_Gate_Max.jpeg",
    trailer: "https://www.youtube.com/watch?v=cxoSpSauqmk&pp=0gcJCfwAo7VqN5tD",
    genres: [],
    country: "UK",
    language: "en",
  },
  {
    id: "tv12",
    title: "Dept Q",
    startYear: 2025,
    description: "Adaptation of Jussi Adler-Olsen’s crime novels: detectives track cold cases in Denmark’s Department Q.",
    image: "https://m.media-amazon.com/images/M/MV5BNWQ3MDQ2MGQtOGM0MC00MzlkLWE0ODQtYzE4Zjc3Mjc1ZWI5XkEyXkFqcGc@._V1_QL75_UY281_CR18,0,190,281_.jpg",
    trailer: "https://www.youtube.com/watch?v=72hK6FUmm8o",
    genres: [],
    country: "DK",
    language: "da",
  },
  {
    id: "tv13",
    title: "Miss Austen",
    startYear: 2025,
    description: "Follows Cassandra Austen, Jane Austen’s sister, on a quest to retrieve and preserve her sister's letters in 1830s England.",
    image: "https://m.media-amazon.com/images/M/MV5BNTY4OTBlMmItYmYxNC00MDRhLTgzNWYtZTNkN2RhNjVkZjFiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailer: "https://www.youtube.com/watch?v=KH5axuNJvig",
    genres: [],
    country: "UK",
    language: "en",
  },
  {
    id: "tv14",
    title: "Secrets We Keep",
    startYear: 2025,
    description: "Danish crime thriller: a wealthy suburb is upended after a neighbor's au pair vanishes, revealing dark secrets beneath the surface.",
    image: "https://m.media-amazon.com/images/M/MV5BN2VkNzhmMDYtYmIxMC00NmU4LTgwYWYtZDRhMmI3MDI0ZjA3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailer: "https://www.youtube.com/watch?v=kKGq8MIJNj4",
    genres: [],
    country: "DK",
    language: "da",
  },
  {
    id: "tv15",
    title: "The Stolen Girl",
    startYear: 2025,
    description: "Five-part thriller: a mother searches for her daughter kidnapped after a sleepover—starring Denise Gough and Holliday Grainger.",
    image: "https://static.tvmaze.com/uploads/images/original_untouched/564/1410383.jpg",
    trailer: "https://www.youtube.com/watch?v=ehYichzjqqo",
    genres: [],
    country: "UK",
    language: "en",
  },
];


export default tvShows;
