/*
 * All site content lives here. Edit, save, commit and push to update the live site.
 */
window.siteData = {
  profile: {
    name: "Shreyash Palande",
    role: "Robotics Engineer",
    tagline: "I build the software that lets mobile robots see, localise and navigate - and keep working once they leave the lab.",
    intro:
      "Robotics engineer with 6+ years of experience taking autonomous systems from prototype to safety-certified field deployment. I specialise in multi-sensor integration (LiDAR, radar, camera, INS), sensor fusion and state estimation, mobile robot navigation, functional safety (EN ISO 13849, IEC 60204-1) and ROS/ROS 2 development. MSc Systems and Control, TU Delft.",
    location: "The Netherlands",
    current: "Lead developer of SGL's TurfRobot, an autonomous turf-care robot with 50+ units sold to stadiums such as FC Bayern Munich, Ajax, Borussia Dortmund and Manchester City.",
    // Optional background video for the top of the page (short, muted, compressed MP4).
    // Leave empty to show the still photo only.
    heroVideo: "assets/hero-turfrobot.mp4",
    // To show "Download CV" buttons again, add the PDF to the repo and uncomment:
    // resume: "Shreyash_Palande_Resume.pdf",
    email: "shreyashpalande60@gmail.com",
    socials: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/spalande97" },
      { label: "GitHub", url: "https://github.com/shreyashpalande" },
    ],
    // Hero highlight numbers. Keep them factual - every number should be defensible in an interview.
    stats: [
      { value: "6+", label: "Years in robotics" },
      { value: "50+", label: "TurfRobot units sold" },
      { value: "2", label: "Robots deployed to customers" },
    ],
    interests:
      "Trained yoga practitioner and certified trainer. I enjoy cycling, hiking, bouldering and photography.",
  },

  // Core areas of expertise, shown as cards below the hero.
  expertise: [
    {
      title: "Perception & sensor fusion",
      text: "Radar-camera fusion, EKF-based multi-object tracking and small-obstacle detection with 3D LiDAR.",
      tags: ["LiDAR", "Radar", "Camera", "PCL", "OpenCV"],
    },
    {
      title: "Localisation & state estimation",
      text: "LiDAR-IMU odometry, GNSS/INS with RTK corrections, and frame handling across ECEF, ENU and LLH.",
      tags: ["EKF", "INS", "RTK-GNSS", "IMU"],
    },
    {
      title: "Navigation & motion planning",
      text: "Tuning ROS navigation stacks, local and global planners, and coverage patterns for GPS-denied sites.",
      tags: ["ROS Nav", "Planners", "Obstacle avoidance"],
    },
    {
      title: "Functional safety & compliance",
      text: "Safety PLC software architecture and software-side certification of an autonomous UV-C robot.",
      tags: ["EN ISO 13849", "IEC 60204-1", "IEC 62368-1", "Safety PLC"],
    },
    {
      title: "Sensor integration & time sync",
      text: "ROS 2 drivers for LiDAR, radar, cameras and INS, with sub-microsecond PTP/gPTP and GPS/PPS synchronisation.",
      tags: ["ROS 2", "PTP/gPTP", "GPS/PPS", "Modbus TCP"],
    },
    {
      title: "Fleet deployment",
      text: "Containerised releases, over-the-air updates and secure networking for robots running at customer sites.",
      tags: ["Docker", "OTA", "VPN", "Embedded Linux"],
    },
  ],

  /*
   * PROJECTS: an intro panel per project, followed by its videos.
   * "role" says what YOU did on it - this is what recruiters read most.
   */
  projectIntros: {
    turfrobot: {
      title: "TurfRobot",
      meta: "SGL · 2026 – present",
      image: {
        src: "assets/hero-turfrobot-stadium.jpg",
        alt: "SGL TurfRobot on the pitch at the Johan Cruijff ArenA, Amsterdam, next to LED grow-light rigs",
      },
      text:
        "SGL's autonomous grass-care robot for professional football pitches. It treats the grass with UV-C light to suppress fungal disease without chemicals, and navigates GPS-denied stadiums using 3D LiDAR mapping. It follows UEFA/FIFA and custom mowing patterns, so grounds teams can work on other tasks while it treats the field.",
      // "role" can be a single sentence or a list of bullet points.
      role: [
        "Lead developer on a product with 50+ units sold, in use at stadiums including FC Bayern Munich, Ajax, Borussia Dortmund and Manchester City.",
        "Own the architecture of the obstacle detection and avoidance system, detecting everything from 15 cm objects such as TurfPods to large grow-light rigs and moving maintenance equipment.",
        "Developed multi-segment operation, so the robot can treat several separate zones of the same pitch in one job.",
        "Built the over-the-air (OTA) update system for the fleet.",
        "Work closely with the product owner and field service engineers to turn on-site feedback into features and fixes.",
      ],
      highlights: ["3D LiDAR", "Obstacle avoidance", "Multi-segment coverage", "GPS-denied navigation", "ROS 2", "OTA updates"],
    },
    omnia: {
      title: "Omnia",
      meta: "Ryberg · 2022 – 2025",
      text:
        "An autonomous UV-C disinfection robot for hospitals. Eight UV-C lamps give 360° coverage, and stereo cameras, LiDAR, ultrasonic sensors and an IMU let it navigate tight spaces and glass surroundings. Safety features prevent UV-C exposure to people.",
      role: [
        "Responsible for the robot's software and its safety certification, bringing it into compliance with IEC 62368-1, IEC 60204-1 and the relevant parts of EN ISO 13849.",
        "Designed the safety PLC software architecture (Siemens S7-1200F) and its ROS interface over Modbus TCP.",
        "Owned the navigation pipeline end to end: obstacle detection, localisation and path planning.",
        "Built a UV-C exposure model of how the lamps' dose spreads through a room.",
        "Defined system requirements, led sensor selection, and set up containerised deployment and the VPN-based fleet network.",
      ],
      highlights: ["Functional safety", "EN ISO 13849", "Safety PLC", "ROS navigation", "Localisation", "UV-C dose modelling"],
    },
  },

  /*
   * VIDEOS: one object per unlisted YouTube video (it must allow embedding).
   * youtubeId is the part after https://youtu.be/
   * "start" and "end" are the preview window in seconds.
   */
  videos: [
    {
      title: "Navigating between grow-light rigs",
      youtubeId: "f3GOu0XfhMY",
      description: "Driving its route alongside LED grow-light rigs at the Johan Cruijff ArenA, Amsterdam.",
      category: "TurfRobot",
      group: "turfrobot",
      start: 0,
      end: 15,
    },
    {
      title: "Small-object detection and avoidance",
      youtubeId: "EdgrshERNv8",
      description: "Detecting and steering around a small object on the pitch during operation.",
      category: "TurfRobot",
      group: "turfrobot",
      start: 0,
      end: 15,
    },
    {
      title: "Close-range manoeuvring around equipment",
      youtubeId: "gtMqWGorOtM",
      description: "Working close to grow-light rigs on the stadium pitch.",
      category: "TurfRobot",
      group: "turfrobot",
      start: 0,
      end: 15,
    },
    {
      title: "Operating-theatre disinfection",
      youtubeId: "GZl8NXowsL0",
      description: "Autonomous UV-C cycle in a hospital operating theatre.",
      category: "Omnia",
      group: "omnia",
      start: 0,
      end: 15,
    },
    {
      title: "Patient-room disinfection",
      youtubeId: "gCBsf3STi4w",
      description: "Deployment in an intensive-care room at a hospital in Dubai.",
      category: "Omnia",
      group: "omnia",
      start: 0,
      end: 15,
    },
  ],

  education: [
    {
      school: "Delft University of Technology",
      degree: "MSc Systems and Control",
      years: "Aug 2018 – Oct 2020",
      location: "Delft, The Netherlands",
      description: "",
    },
  ],

  experience: [
    {
      role: "Robotics Engineer - Lead Developer, TurfRobot",
      company: "SGL",
      location: "The Netherlands",
      years: "March 2026 – Present",
      highlights: [
        "Lead developer of TurfRobot, an autonomous UV-C turf-care robot with 50+ units sold to stadiums including FC Bayern Munich, Ajax, Borussia Dortmund and Manchester City.",
        "Own the architecture of the obstacle detection and avoidance system, reliably detecting objects from 15 cm TurfPods up to large grow-light rigs during field operations.",
        "Developed multi-segment operation, allowing the robot to treat several zones of the same pitch in a single job.",
        "Implemented an over-the-air (OTA) update system for the robot fleet to streamline software deployment and remote management.",
        "Work with the product owner and field service engineers to prioritise features and resolve on-site issues.",
      ],
    },
    {
      role: "Robotics Engineer",
      company: "PercivAi",
      location: "The Netherlands",
      image: {
        src: "assets/percivai-vehicles.jpg",
        alt: "Shreyash with PercivAI's sensor-equipped test car and off-road vehicle",
      },
      years: "June 2025 – Feb 2026",
      highlights: [
        "Engineered multi-sensor system integration for automotive, off-road and drone platforms, orchestrating data acquisition from heterogeneous sensor arrays comprising multiple radars, cameras, LiDARs, odometry sensors and INS units.",
        "Deployed comprehensive time synchronization infrastructure using PTP/gPTP and GPS/PPS protocols, achieving sub-microsecond accuracy across multiple sensor networks to enable precise temporal alignment.",
        "Developed ROS2 drivers for INS sensors and RTK correction, implementing odometry conversion into different frames such as ECEF/ENU/LLH.",
        "Implemented late-stage sensor fusion and EKF-based tracking combining radar and camera detections to detect, classify and track objects in lawn mowing environments, enabling robust perception and obstacle avoidance.",
      ],
    },
    {
      role: "Robotics Software Engineer",
      company: "Ryberg BV",
      location: "Delft, The Netherlands",
      years: "July 2022 – May 2025",
      highlights: [
        "Responsible for the software of the Omnia autonomous UV-C disinfection robot and its safety certification, bringing it into compliance with IEC 62368-1, IEC 60204-1 and the relevant parts of EN ISO 13849.",
        "Designed the safety PLC software architecture (Siemens S7-1200F) and implemented ROS drivers for the PLC and sensors over Modbus TCP.",
        "Owned the navigation pipeline from obstacle detection and localisation to path planning, tuning the ROS navigation stack's local and global planners.",
        "Built a UV-C exposure model to estimate how the lamps' dose spreads through a room.",
        "Developed system requirements and led sensor selection (LiDAR, cameras, ultrasonic sensors) for the autonomous mobile robot.",
        "Created containerized environments for robot software deployment, enabling consistent and reliable updates across the robot fleet.",
        "Established a secure network architecture for robot fleet operations, including VPN setup and system integration for seamless communication and commissioning between backend services, ROS nodes and tablet interfaces.",
      ],
    },
    {
      role: "Junior Robotics Engineer",
      company: "GeoSignum BV",
      location: "Delft, The Netherlands",
      years: "Nov 2020 – June 2022",
      highlights: [
        "Developed and implemented software packages for interfacing with multiple sensors (3D LiDAR, GigE cameras, GNSS, IMU) using embedded Linux platforms, establishing reliable data acquisition protocols.",
        "Created modular ROS packages for sensor calibration and configuration, including tools for parameter optimization that improved system reliability and accuracy.",
        "Implemented data processing algorithms for sensor fusion, focusing on efficient embedded system implementation for real-time operation.",
      ],
    },
    {
      role: "Robotics Software Intern",
      company: "Mainblades Inspections BV",
      location: "Den Haag, The Netherlands",
      years: "July 2019 – Oct 2019",
      highlights: [
        "Developed an odometry estimator using LiDAR and IMU, achieving a relative trajectory error of less than 10 cm.",
        "Configured an Extended Kalman Filter (EKF) for robust sensor fusion, global localization and drift reduction.",
        "Developed an experimental validation setup for testing indoor flight localization and control algorithms.",
      ],
    },
  ],

  skills: [
    {
      category: "Programming",
      items: ["C++", "Python", "MATLAB", "Simulink"],
    },
    {
      category: "Robotics frameworks",
      items: ["ROS", "ROS2"],
    },
    {
      category: "Algorithms",
      items: ["Sensor Fusion", "Navigation", "Motion Planning", "Obstacle Avoidance", "EKF", "Localization"],
    },
    {
      category: "Libraries",
      items: ["Boost", "Eigen", "PCL", "OpenCV", "Scikit-learn", "Scikit-image"],
    },
    {
      category: "Platforms & tools",
      items: ["Docker", "Qt", "Siemens TIA Portal", "AWS", "Git", "GitHub", "GitLab", "VS Code", "JIRA", "Notion", "Agile/SCRUM"],
    },
    {
      category: "Hardware",
      items: ["Nvidia Jetson", "Arduino", "Siemens S7 PLC", "3D LiDAR", "GigE/ToF cameras", "GNSS", "INS", "Radar"],
    },
    {
      category: "Functional safety",
      items: ["EN ISO 13849", "IEC 60204-1", "IEC 62368-1", "Safety PLC (S7-1200F)", "Siemens TIA Portal"],
    },
    {
      category: "Time synchronization",
      items: ["PTP", "gPTP", "GPS/PPS", "NTP"],
    },
  ],
};
