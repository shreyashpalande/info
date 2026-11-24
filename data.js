/*
 * EDIT THIS FILE TO MAKE THE SITE YOURS.
 * Everything you see on the page comes from the object below.
 * After editing, save the file and push it to GitHub to update the live site.
 */
window.siteData = {
  profile: {
    // Change this to your real name.
    name: "Shreyash Palande",
    role: "Robotics Engineer",
    tagline: "Autonomous systems, sensor fusion and perception - from research to production.",
    intro:
      "Robotics engineer with 6+ years of experience deploying autonomous systems, sensor fusion and perception algorithms. I work on multi-sensor integration (LiDAR, Radar, Camera, INS), mobile robot navigation and ROS/ROS2 development, delivering robust, production-ready certified solutions for complex robotic applications.",
    location: "The Netherlands",
    current: "Robotics Engineer at SGL The Netherlands, working on autonomous turf maintenance robots.",
    // Add your real email address here.
    email: "shreyashpalande60@gmail.com",
    // Add real links (LinkedIn, GitHub, etc.). Delete any you don't want.
    socials: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/spalande97" },
      { label: "GitHub", url: "https://github.com/shreyashpalande" },
    ],
    interests:
      "Trained yoga practitioner and certified trainer. I enjoy cycling, hiking, bouldering and photography.",
  },

  /*
   * VIDEOS: add one object per unlisted YouTube video.
   *
   * Get the ID from a link like:
   *   https://youtu.be/VIDEO_ID_HERE  or  https://www.youtube.com/watch?v=VIDEO_ID_HERE
   * Copy only the VIDEO_ID_HERE part into "youtubeId" below.
   *
   * Important: the video must allow embedding, and "unlisted" still means anyone
   * with the link can watch it. Only share videos you are comfortable sharing.
   *
   * Example:
   * { title: "Turfrobot obstacle avoidance", youtubeId: "dQw4w9WgXcQ",
   *   description: "Small-object detection during field operations.",
   *   date: "2026", category: "Navigation", start: 0, end: 15 }
   */
  // Short project intro shown above the video grid.
  projectIntros: {
    turfrobot: {
      title: "TurfRobot",
      text:
        "TurfRobot is SGL's autonomous grass-care machine for sports pitches. It uses calibrated UVC light to suppress fungal disease without chemicals, and navigates GPS-denied stadium environments using 3D LiDAR mapping and obstacle detection for TurfPods, grow lights and moving maintenance equipment. It follows pre-set treatment routes and UEFA/FIFA mowing patterns, so grounds teams can work on other tasks while it treats the field.",
    },
    omnia: {
      title: "Omnia®",
      text:
        "Omnia® — autonomous UV-C hospital disinfection. 360° coverage from eight height-optimised lamps, with 3D stereo cameras, LiDAR, ultrasonic sensors and IMU for precise navigation through tight spaces and glass recognition. Chemical-free, with safety features that prevent UV-C exposure to people.",
    },
  },

  /*
   * Rename titles/descriptions as you like.
   * "start" and "end" are the preview window in seconds - clicking a tile plays
   * only that part, on a loop. Change them to show a different part of a video.
   */
  videos: [
    {
      title: "Turfrobot clip 1",
      youtubeId: "f3GOu0XfhMY",
      description: "Field demo at Ajax Amsterdam Arena.",
      category: "Turfrobot",
      group: "turfrobot",
      start: 0,
      end: 15,
    },
    {
      title: "Turfrobot clip 2",
      youtubeId: "EdgrshERNv8",
      description: "Field demo at Ajax Amsterdam Arena.",
      category: "Turfrobot",
      group: "turfrobot",
      start: 0,
      end: 15,
    },
    {
      title: "Turfrobot clip 3",
      youtubeId: "gtMqWGorOtM",
      description: "Field demo at Ajax Amsterdam Arena.",
      category: "Turfrobot",
      group: "turfrobot",
      start: 0,
      end: 15,
    },
    {
      title: "Ryberg clip 1",
      youtubeId: "GZl8NXowsL0",
      category: "Ryberg's Omnia",
      group: "omnia",
      start: 0,
      end: 15,
    },
    {
      title: "Ryberg clip 2",
      youtubeId: "gCBsf3STi4w",
      description: "Deployment at a hospital in Dubai.",
      category: "Ryberg's Omnia",
      group: "omnia",
      start: 0,
      end: 15,
    },
  ],

  education: [
    {
      school: "Delft University of Technology",
      degree: "MSc. Systems and Control",
      years: "Aug 2018 – Oct 2020",
      location: "Delft, The Netherlands",
      description: "",
    },
  ],

  experience: [
    {
      role: "Robotics Engineer",
      company: "SGL",
      location: "The Netherlands",
      years: "March 2026 – Present",
      highlights: [
        "Developed obstacle detection and avoidance algorithms for the SGL turfrobot to reliably detect and avoid small turfpods and pitch objects during field operations.",
        "Implemented an over-the-air (OTA) update system for the robot fleet to streamline software deployment and remote management.",
      ],
    },
    {
      role: "Robotics Engineer",
      company: "PercivAi",
      location: "The Netherlands",
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
        "Developed system requirements and led the sensor selection process for autonomous mobile robots - including LiDAR, cameras and ultrasonic sensors - to ensure optimal performance within project constraints.",
        "Designed and implemented low-level ROS drivers for industrial hardware, including Siemens S71200F PLC and various sensors, establishing robust communication protocols across multiple interfaces (Modbus TCP, etc.).",
        "Configured, tuned and optimized ROS navigation stack components, enhancing motion planning and obstacle avoidance algorithms (e.g. local/global planners), and implemented hardware interfaces for odometry and sensor data integration.",
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
      category: "Time synchronization",
      items: ["PTP", "gPTP", "GPS/PPS", "NTP"],
    },
  ],
};
