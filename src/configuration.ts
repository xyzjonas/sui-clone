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
      bookmarks: [
        {
          title: "Household HQ",
          link: "https://householdhq.vercel.app/",
          icon: "payments",
        },
        {
          title: "Chef",
          link: "https://chef-astro.vercel.app/",
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
      ],
    },
    {
      title: "home",
      icon: "home",
      maxCols: 2,
      bookmarks: [
        {
          title: "Emby",
          link: "http://192.168.0.203:8096",
          icon: "si-emby",
        },
        {
          title: "Jellyfin",
          link: "http://192.168.0.203:8097",
          icon: "si-jellyfin",
        },
        {
          title: "PiHole",
          link: "http://pihole.home/admin/index.php",
          icon: "si-pihole",
        },
        {
          title: "Homeassistant",
          link: "http://homeassistant.home",
          icon: "si-homeassistant",
        },
        {
          title: "qBittorrent",
          link: "http://192.168.0.203:8083",
          icon: "file_download",
        },
        {
          title: "Filebrowser",
          link: "http://192.168.0.203:8084",
          icon: "folder_open",
        },
        {
          title: "Portainer",
          link: "https://192.168.0.203:9443",
          icon: "si-docker",
        },
        {
          title: "Dazhbog",
          link: "https://192.168.0.203:9090",
          icon: "si-fedora",
        },
      ],
    },
  ],
};
