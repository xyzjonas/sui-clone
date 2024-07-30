export type Bookmark = {
  title: string;
  subtitle?: string;
  icon?: string;
  link: string;
  disabled?: boolean;
};

export type Section = {
  title: string;
  bookmarks: Bookmark[];
  icon?: string;
  maxCols?: number;
  color?: string;
};

export type Links = {
  title: string;
  color?:  string;
  links: {
    label: string;
    link: string;
  }[]
}

export type Dashboard = {
  links: Links[];
  sections: Section[];
  maxCols?: number;
};

export type Configuration = { [key: string]: Dashboard };

const personal: Dashboard = {
  links: [],
  sections: [
    {
      title: "apps",
      icon: "public",
      maxCols: 1,
      color: "#3876BF",
      bookmarks: [
        {
          title: "Household HQ",
          link: "https://home.bohunky.xyz/",
          icon: "payments",
        },
        {
          title: "Chef",
          link: "https://chef.bohunky.xyz/",
          icon: "restaurant_menu",
        },
        {
          title: "Chef #2",
          link: "https://chef-nuxt.bohunky.xyz/",
          icon: "restaurant_menu",
        },
        {
          title: "Torrentbox",
          link: "https://torrent.bohunky.xyz",
          icon: "si-utorrent",
        },
        {
          title: "Homeassistant",
          link: "https://homeassistant.bohunky.xyz",
          icon: "si-homeassistant",
        },
        {
          title: "qBittorrent",
          link: "https://torrent.bohunky.xyz",
          icon: "file_download",
          disabled: true,
        },
        {
          title: "Vehicles",
          link: "https://cars.bohunky.xyz",
          icon: "directions_car",
        },
        {
          title: "Monica",
          link: "https://monica.bohunky.xyz",
          icon: "si-monica",
        },
        {
          title: "Files",
          link: "https://filebrowser.bohunky.xyz",
          icon: "folder_open",
        },
        {
          title: "Music",
          link: "https://music.bohunky.xyz",
          icon: "music_note",
        },
        {
          title: "Miniflux",
          link: "https://miniflux.bohunky.xyz/",
          icon: "si-rss",
          disabled: true,
        },
      ],
    },
    {
      title: "home",
      icon: "home",
      maxCols: 1,
      color: "#79AC78",
      bookmarks: [
        {
          title: "Emby",
          link: "https://emby.home.local",
          icon: "si-emby",
        },
        {
          title: "Jellyfin",
          link: "https://jellyfin.home.local",
          icon: "si-jellyfin",
        },
        {
          title: "Chef",
          link: "https://chef.home.local",
          icon: "restaurant_menu",
          disabled: true,
        },
        {
          title: "Homeassistant",
          link: "http://homeassistant.home.local:8123",
          icon: "si-homeassistant",
        },
        {
          title: "qBittorrent",
          link: "https://qbittorrent.home.local/",
          icon: "file_download",
          disabled: true,
        },
        {
          title: "Mediasorter",
          link: "https://mediasorter.home.local",
          icon: "recycling",
        },
        {
          title: "Navidrome",
          link: "https://music.home.local",
          icon: "music_note",
        },
        {
          title: "Filebrowser",
          link: "https://filebrowser.home.local",
          icon: "folder",
        },
      ],
    },
    {
      title: "infra",
      icon: "dns",
      color: "#ea4335",
      bookmarks: [
        {
          title: "PiHole",
          link: "http://pihole.home.local/admin",
          icon: "si-pihole",
        },
        {
          title: "Portainer.public",
          link: "https://portainer.bohunky.xyz",
          icon: "si-docker",
        },
        {
          title: "Portainer.local",
          link: "https://dazhbog.home.local:9443",
          icon: "si-docker",
        },
        {
          title: "Dazhbog",
          link: "https://dazhbog.home.local:9090",
          icon: "si-fedora",
        },
      ]
    },
  ],
};

const work: Dashboard = {
  links: [],
  sections: [
    {
      title: "CODE",
      icon: "code",
      maxCols: 1,
      color: "#fba525",
      bookmarks: [
        {
          title: "Smash",
          link: "https://gitlab.suse.de/tools/smash/",
          icon: "si-gitlab",
        },
        {
          title: "Smelt",
          link: "https://gitlab.suse.de/tools/smash/",
          icon: "si-gitlab",
        },
        {
          title: "MTK",
          link: "https://gitlab.suse.de/tools/maintenance-toolkit/",
          icon: "si-gitlab",
        },
        {
          title: "Auto Config",
          link: "https://gitlab.suse.de/tools/auto_config/",
          icon: "si-gitlab",
        },
        {
          title: "Issue Board",
          link: "https://gitlab.suse.de/groups/tools/-/boards",
          icon: "space_dashboard",
        },
        {
          title: "Github MAE",
          link: "https://github.com/orgs/SUSE/teams/maintenance-automation-engineering/repositories",
          icon: "si-github",
        },
      ],
    },
    {
      title: "IBS",
      icon: "factory",
      maxCols: 1,
      color: "#79AC78",
      bookmarks: [
        {
          title: "Containers",
          link: "https://build.suse.de/project/show/NON_Public:maintenance:tools:containers",
          icon: "si-docker",
        },
        {
          title: "MTK",
          link: "https://build.suse.de/package/show/NON_Public:maintenance:tools/mtk",
          icon: "handyman",
        },
      ],
    },
    {
      title: "infra",
      icon: "dns",
      color: "#003cf0",
      bookmarks: [
        {
          title: "ELK",
          link: "http://elk.mae.suse.de:8000/app/discover#/view/874b3e50-eec7-11eb-862b-e3549ca4f21b",
          icon: "si-elastic",
        },
        {
          title: "Openplatform",
          link: "https://op-prg2.openplatform.suse.com/dashboard/home",
          icon: "si-rancher",
        },
      ]
    },
    {
      title: "Prod & stage",
      icon: "si-suse",
      color: "#30ba78",
      bookmarks: [
        {
          title: "Smash",
          link: "https://smash.suse.de/",
          icon: "settings",
        },
        {
          title: "Smash (staging)",
          link: "https://smash-staging.mae.suse.de/",
          icon: "settings",
        },
        {
          title: "Smelt",
          link: "https://smelt.suse.de/overview/",
          icon: "si-suse",
        },
        {
          title: "AIMAAS",
          link: "https://aimaas.suse.de/",
          icon: "si-suse",
        },
      ]
    },
  ],
};

export const configuration: Configuration = {
    personal,
    work,
}