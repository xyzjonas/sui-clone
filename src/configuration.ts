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
          title: "Home",
          link: "https://home.bohunky.xyz/",
          icon: "payments",
        },
        {
          title: "Chef",
          link: "https://chef.bohunky.xyz/",
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
          title: "Vehicles",
          link: "https://cars.bohunky.xyz",
          icon: "directions_car",
        },
        {
          title: "Files",
          link: "https://filebrowser.bohunky.xyz",
          icon: "folder_open",
          disabled: true
        },
        {
          title: "Music",
          link: "https://music.bohunky.xyz",
          icon: "music_note",
          disabled: true,
        },
        {
          title: "Miniflux",
          link: "https://miniflux.bohunky.xyz/",
          icon: "si-rss",
          disabled: true,
        },
        {
          title: "Snippets",
          link: "https://snippets.bohunky.xyz/",
          icon: "code",
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
          // link: "https://emby.home.local",
          link: "http://mokosh.home.local:8096",
          icon: "si-emby",
        },
        {
          title: "Jellyfin",
          // link: "https://jellyfin.home.local",
          link: "http://mokosh.home.local:8097",
          icon: "si-jellyfin",
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
          title: "Dockge",
          link: "http://mokosh.home.local:5001",
          icon: "si-docker",
        },
        {
          title: "Cockpit",
          link: "https://mokosh.home.local:9090",
          icon: "si-fedora",
        },
        {
          title: "Beszel",
          link: "https://beszel.bohunky.xyz/",
          icon: "si-simpleanalytics",
        },
        {
          title: "Backrest",
          link: "http://mokosh.home.local:9898",
          icon: "backup",
        },
        {
          title: "Edit This Page",
          subtitle: "xyzjonas/sui-clone",
          link: "https://github.com/xyzjonas/sui-clone/blob/main/src/configuration.ts",
          icon: "si-github",
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
          link: "https://gitlab.suse.de/tools/smelt/",
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
          title: "My Issues",
          link: "https://gitlab.suse.de/dashboard/issues?sort=updated_desc&state=opened&assignee_username[]=jbrauer&or[label_name][]=Doing&or[label_name][]=In+Refinement",
          icon: "si-gitlab",
        },
        {
          title: "Opened MRs",
          link: "https://gitlab.suse.de/groups/tools/-/merge_requests/?sort=updated_desc&state=opened&first_page_size=20",
          icon: "si-git",
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
        {
          title: "Packtrack",
          link: "https://packtrack.suse.cz/",
          icon: "code",
        }
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
      title: "TEAM",
      icon: "si-suse",
      color: "#30ba78",
      bookmarks: [
        {
          title: "MAE Confluence",
          link: "https://confluence.suse.com/display/MAE/Maintenance+Automation+Engineering",
          icon: "si-confluence",
        },
        {
          title: "Team meeting",
          link: "https://confluence.suse.com/display/MAE/Team+Meeting",
          icon: "si-confluence",
        },
        {
          title: "Penpot",
          link: "https://design.penpot.app/",
          icon: "si-penpot",
        },
        {
          title: "Intranet (SUSEvers)",
          link: "https://sites.google.com/suse.com/suseverse/home",
          icon: "si-suse",
        }
      ]
    },
  ],
};

export const configuration: Configuration = {
    personal,
    work,
}
