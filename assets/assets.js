import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import terraform from './terraform.png';
import gitlab from './gitlab.png';
import proxmox from './proxmox.png';
import kube from './kube.png';
import ansible from './ansible.png';
import linux from './linux.png';
import cisco from './cisco.png';
import vmware from './vmware.png';
import git from './git.png';
import cisco_white from './cisco_white.png';
import vmware_white from './vmware_white.png';
import proxmox_white from './proxmox_white.png';
import linux_white from './linux_white.png';
import microsoft from './microsoft.png';
import microsoft_white from './microsoft_white.png';
import terraform_white from './terraform_white.png';
import gitlab_white from './gitlab_white.png';
import kube_white from './kube_white.png';
import ansible_white from './ansible_white.png';
import git_white from './git_white.png';
import firebase from './firebase.png';
import figma from './figma.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.gif';
import logo_dark from './logo_dark.gif';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import badge_rhcsa from './badge_rhcsa.png';
import badge_ccna_itn from './badge_ccna_itn.png';
import badge_ccna_srwe from './badge_ccna_srwe.png';
import badge_ccna_ensa from './badge_ccna_ensa.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    terraform,
    gitlab,
    proxmox,
    kube,
    ansible,
    linux,
    cisco,
    vmware,
    firebase,
    figma,
    git,
    cisco_white,
    vmware_white,
    proxmox_white,
    linux_white,
    microsoft,
    microsoft_white,
    terraform_white,
    gitlab_white,
    kube_white,
    ansible_white,
    git_white,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Cloud Souverain Proxmox',
        description: 'Provisioning IaC • OpenTofu & VLAN',
        bgImage: '/opentofu.jpg',
        link: 'https://github.com/herizomarc/pve-infra-iac',
    },
    {
        title: 'OS Immuable & Appliances',
        description: 'RHEL 9 BootC • SELinux & Zabbix',
        bgImage: '/gitops.jpg',
        link: 'https://github.com/herizomarc/pve-infra-bootc',
    },
    {
        title: 'Sécurité Zero-Trust CI/CD',
        description: 'OpenBao OIDC • Ansible & Podman',
        bgImage: '/openbao.jpg',
        link: 'https://github.com/herizomarc/pve-apps-configure',
    },
    {
        title: 'Image Système Durcie',
        description: 'RHEL 9 • CIS Hardening & Cloud-Init',
        bgImage: '/template.jpg',
        link: 'https://github.com/herizomarc/rhel-golden-image',
    },
];




export const serviceData = [
    { 
        icon: badge_rhcsa, 
        title: 'RHCSA', 
        description: 'Red Hat Certified System Administrator', 
        link: 'https://www.credly.com/badges/2c963e81-b421-44bd-9d4e-56c0c6f61be1' 
    },
    { 
        icon: badge_ccna_itn, 
        title: 'CCNA v7 - ITN', 
        description: 'Introduction to Networks', 
        link: 'https://www.credly.com/badges/c4169874-c332-4ef4-8e8b-96f64c60d56c'
    },
    { 
        icon: badge_ccna_srwe, 
        title: 'CCNA v7 - SRWE', 
        description: 'Switching, Routing & Wireless Essentials', 
        link: 'https://www.credly.com/badges/d39f6e2e-0917-459b-8df6-1b83a22d64b2' 
    },
    { 
        icon: badge_ccna_ensa, 
        title: 'CCNA v7 - ENSA', 
        description: 'Enterprise Networking, Security & Automation', 
        link: 'https://www.credly.com/badges/1b0f5a11-b909-451e-9040-5f5c627bb5af' 
    },
];


export const infoList = [
    { 
        icon: assets.code_icon, 
        iconDark: assets.code_icon_dark, 
        title: 'Core Stack', 
        description: 'Linux, Windows Server, Virtualisation, Réseaux, IaC & CI/CD' 
    },
    { 
        icon: assets.edu_icon, 
        iconDark: assets.edu_icon_dark, 
        title: 'Réseaux & Sécurité', 
        description: 'Segmentation VLAN, Routage OSPF, Pare-feu, Hardening CIS & Zero-Trust' 
    },
    { 
        icon: assets.project_icon, 
        iconDark: assets.project_icon_dark, 
        title: 'Réalisations', 
        description: 'Infrastructures critiques haute disponibilité, sécurisées et automatisées' 
    }
];




export const toolsData = [
    { icon: assets.cisco, iconDark: assets.cisco_white, name: 'Cisco Networking' },
    { icon: assets.vmware, iconDark: assets.vmware_white, name: 'VMware vSphere' },
    { icon: assets.proxmox, iconDark: assets.proxmox_white, name: 'Proxmox VE' },
    { icon: assets.linux, iconDark: assets.linux_white, name: 'Linux (RHEL / Debian)' },
    { icon: assets.microsoft, iconDark: assets.microsoft_white, name: 'Microsoft Windows' },
    { icon: assets.terraform, iconDark: assets.terraform_white, name: 'Terraform / OpenTofu' },
    { icon: assets.gitlab, iconDark: assets.gitlab_white, name: 'GitLab CI/CD' },
    { icon: assets.kube, iconDark: assets.kube_white, name: 'Kubernetes' },
    { icon: assets.ansible, iconDark: assets.ansible_white, name: 'Ansible' },
    { icon: assets.git, iconDark: assets.git_white, name: 'Git' },
];

