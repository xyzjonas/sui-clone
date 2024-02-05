export type Bookmark = {
  title: string;
  subtitle?: string;
  icon?: string;
  link: string;
};

export type Section = {
  title: string;
  bookmarks: Bookmark[];
  icon?: string;
  maxCols?: number;
  color?: string;
};

export type Configuration = {
  sections: Section[];
  maxCols?: number;
};

export const configuration: Configuration = {
  sections: [
    {
      title: "public",
      icon: "public",
      maxCols: 1,
      color: "#3876BF",
      bookmarks: [
        {
          title: "Household HQ",
          link: "https://householdhq.vercel.app/",
          icon: "payments",
        },
        {
          title: "Chef",
          link: "https://chef.bohunky.xyz/",
          icon: "restaurant_menu",
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
        },
        {
          title: "Filebrowser",
          link: "https://filebrowser.bohunky.xyz",
          icon: "folder_open",
        },
        {
          title: "Portainer",
          link: "https://portainer.bohunky.xyz",
          icon: "si-docker",
        },
        {
          title: "Miniflux",
          link: "https://miniflux.bohunky.xyz/",
          icon: "si-rss",
        },
      ],
    },
    {
      title: "home",
      icon: "home",
      maxCols: 2,
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
          title: "PhotoPrism",
          link: "https://photos.home.local",
          icon: "collections",
        },
        {
          title: "PiHole",
          link: "http://pihole.home.local/admin",
          icon: "si-pihole",
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
        },
        {
          title: "Mediasorter",
          link: "http://dazhbog.home:8086/",
          icon: "recycling",
        },
        {
          title: "Sonarr",
          link: "http://192.168.0.203:8989",
          icon: "live_tv",
        },
        {
          title: "Filebrowser",
          link: "https://filebrowser.home.local",
          icon: "folder_open",
        },
        {
          title: "Portainer",
          link: "https://192.168.0.203:9443",
          icon: "si-docker",
        },
        {
          title: "Dazhbog",
          link: "https://dazhbog.home.local:9090/system",
          icon: "si-fedora",
        },
      ],
    },
  ],
};
