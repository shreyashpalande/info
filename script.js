(function () {
  "use strict";

  const data = window.siteData || {};
  const profile = data.profile || {};
  const byId = (id) => document.getElementById(id);
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function node(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined && text !== null && text !== "") element.textContent = text;
    return element;
  }

  function sectionHeading(label, title) {
    const wrapper = node("div", "section-heading");
    wrapper.append(node("p", "eyebrow", label), node("h2", "", title));
    return wrapper;
  }

  function renderHero() {
    if (profile.name) {
      byId("brand-name").textContent = profile.name;
      byId("brand-mark").textContent = profile.name
        .trim()
        .split(/\s+/)
        .map((part) => part.charAt(0).toUpperCase())
        .slice(0, 2)
        .join("");
      byId("footer-name").textContent = profile.name;
      document.title = profile.name + (profile.role ? " - " + profile.role : " - Portfolio");
    }
    byId("hero-role").textContent = profile.role || "";
    byId("hero-name").textContent = profile.name || "Your Name";
    byId("hero-tagline").textContent = profile.tagline || "";
    byId("hero-intro").textContent = profile.intro || "";
    byId("hero-current").textContent = profile.current || "";

    if (profile.location) byId("hero-location").textContent = profile.location;

    const stats = byId("hero-stats");
    const items = profile.stats || [];
    items.forEach((item) => {
      const stat = node("div", "stat");
      stat.append(node("dt", "", item.label), node("dd", "", item.value));
      stats.append(stat);
    });
  }

  function renderExpertise() {
    const list = byId("expertise-list");
    if (!list) return;
    (data.expertise || []).forEach((area) => {
      const card = node("article", "card expertise-card");
      card.append(node("h3", "", area.title || ""));
      if (area.text) card.append(node("p", "", area.text));
      if (area.tags && area.tags.length) {
        const tags = node("div", "tag-list");
        area.tags.forEach((tag) => tags.append(node("span", "tag", tag)));
        card.append(tags);
      }
      list.append(card);
    });
  }

  function renderHeroVideo() {
    const media = byId("hero-media");
    if (!media || !profile.heroVideo || reduceMotion) return;
    const video = node("video", "hero-media-video");
    video.muted = true;
    video.loop = true;
    video.autoplay = true;
    video.playsInline = true;
    video.setAttribute("playsinline", "");
    video.preload = "auto";
    video.poster = media.querySelector("img") ? media.querySelector("img").src : "";
    video.src = profile.heroVideo;
    video.addEventListener("playing", () => media.classList.add("video-ready"));
    media.append(video);
    video.play().catch(() => {
      /* Autoplay blocked - the still photo stays visible */
    });
  }

  function renderProjectIntro(key, targetId) {
    const intro = data.projectIntros && data.projectIntros[key];
    const target = byId(targetId);
    if (!intro || !target) return;

    const panel = node("div", "project-intro");
    if (intro.image && intro.image.src) {
      const figure = node("figure", "project-photo");
      const img = node("img");
      img.src = intro.image.src;
      img.alt = intro.image.alt || "";
      img.loading = "lazy";
      figure.append(img);
      panel.append(figure);
    }
    const copy = node("div", "project-intro-copy");
        if (intro.title) copy.append(node("h3", "", intro.title));
    if (intro.meta) copy.append(node("p", "project-meta", intro.meta));
    if (intro.text) copy.append(node("p", "", intro.text));
    if (Array.isArray(intro.role) && intro.role.length) {
      const role = node("div", "project-role");
      role.append(node("strong", "", "My role"));
      const ul = node("ul", "bullets");
      intro.role.forEach((point) => ul.append(node("li", "", point)));
      role.append(ul);
      copy.append(role);
    } else if (intro.role) {
      const role = node("p", "project-role");
      role.append(node("strong", "", "My role: "), document.createTextNode(intro.role));
      copy.append(role);
    }

    if (intro.highlights && intro.highlights.length) {
      const tags = node("div", "tag-list");
      intro.highlights.forEach((item) => tags.append(node("span", "tag", item)));
      copy.append(tags);
    }

    if (intro.url) {
      const link = node("a", "project-link", "Learn more about " + intro.title + " ↗");
      link.href = intro.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      copy.append(link);
    }

    panel.append(copy);
    target.append(panel);
  }

  function renderVideos() {
    const grids = {
      turfrobot: byId("turfrobot-videos"),
      omnia: byId("omnia-videos"),
    };
    const videos = data.videos || [];

    if (!videos.length) {
      const empty = node("div", "empty-state");
      empty.append(
        node("h3", "", "No videos yet"),
        node(
          "p",
          "",
          "Add an unlisted YouTube video ID to the videos array in data.js and it will appear here automatically."
        )
      );
      grids.turfrobot.append(empty);
      byId("video-note").textContent =
        "Tip: in YouTube, set your video to “Unlisted”, then copy the ID from its link into data.js.";
      return;
    }

    videos.forEach((video) => {
      const grid = grids[video.group] || grids.omnia;
      const card = node("article", "video-card");
      const thumb = node("button", "video-thumb");
      thumb.type = "button";
      thumb.setAttribute(
        "aria-label",
        "Play video: " + (video.title || "video")
      );

      const image = node("img");
      image.src = "https://i.ytimg.com/vi/" + encodeURIComponent(video.youtubeId) + "/hqdefault.jpg";
      image.alt = "";
      image.loading = "lazy";
      const play = node("span", "play-button", "▶");
      thumb.append(image, play);

      const start = Number.isFinite(Number(video.start)) ? Number(video.start) : 0;
      const requestedEnd = Number.isFinite(Number(video.end)) ? Number(video.end) : 15;
      const end = requestedEnd > start ? requestedEnd : start + 15;
      const previewLength = Math.round(end - start);
      thumb.append(node("span", "preview-badge", previewLength + "s preview"));

      thumb.addEventListener("click", () => {
        const params = new URLSearchParams({
          autoplay: "1",
          mute: "1",
          loop: "1",
          playlist: video.youtubeId,
          start: String(start),
          end: String(end),
          rel: "0",
          modestbranding: "1",
          playsinline: "1",
        });
        const iframe = node("iframe");
        iframe.src =
          "https://www.youtube-nocookie.com/embed/" +
          encodeURIComponent(video.youtubeId) +
          "?" +
          params.toString();
        iframe.title = "Preview: " + (video.title || "video");
        iframe.allow =
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.allowFullscreen = true;
        thumb.replaceWith(iframe);
      });

      const body = node("div", "video-body");
      body.append(node("h3", "", video.title || "Untitled video"));
      if (video.description) body.append(node("p", "", video.description));
      const footer = node("div", "video-footer");
      if (video.category) footer.append(node("span", "tag", video.category));
      if (video.date) footer.append(node("span", "muted", video.date));
      if (footer.childNodes.length) body.append(footer);

      const fullLink = node("a", "full-video-link", "Watch full video on YouTube ↗");
      fullLink.href = "https://youtu.be/" + encodeURIComponent(video.youtubeId);
      fullLink.target = "_blank";
      fullLink.rel = "noopener noreferrer";
      body.append(fullLink);

      card.append(thumb, body);
      grid.append(card);
    });

    byId("video-note").textContent =
      "Previews are short, muted loops. Use the link under each clip to watch the full video on YouTube.";
  }

  function renderExperience() {
    const list = byId("experience-list");
    (data.experience || []).forEach((job) => {
      const item = node("article", "timeline-item");
      const marker = node("span", "timeline-marker");
      const content = node("div", "timeline-content card");

      const top = node("div", "item-top");
      const heading = node("div", "item-heading");
      heading.append(node("h3", "", job.role || ""));
      if (job.company) heading.append(node("p", "company", job.company));
      top.append(heading);
      if (job.years) top.append(node("span", "date-badge", job.years));
      content.append(top);
      if (job.location) content.append(node("p", "muted small", job.location));

      if (job.highlights && job.highlights.length) {
        const ul = node("ul", "bullets");
        job.highlights.forEach((point) => ul.append(node("li", "", point)));
        content.append(ul);
      }

      if (job.image && job.image.src) {
        const figure = node("figure", "job-photo");
        const img = node("img");
        img.src = job.image.src;
        img.alt = job.image.alt || "";
        img.loading = "lazy";
        figure.append(img);
        content.append(figure);
      }

      item.append(marker, content);
      list.append(item);
    });
  }

  function renderEducation() {
    const list = byId("education-list");
    (data.education || []).forEach((school) => {
      const card = node("article", "card info-card");
      card.append(node("h3", "", school.degree || ""));
      if (school.school) card.append(node("p", "company", school.school));
      if (school.years) card.append(node("span", "date-badge", school.years));
      if (school.location) card.append(node("p", "muted small", school.location));
      if (school.description) card.append(node("p", "", school.description));
      list.append(card);
    });
  }

  function renderSkills() {
    const list = byId("skills-list");
    (data.skills || []).forEach((group) => {
      const card = node("article", "card skill-card");
      card.append(node("h3", "", group.category || ""));
      const tags = node("div", "tag-list");
      (group.items || []).forEach((item) => tags.append(node("span", "tag", item)));
      card.append(tags);
      list.append(card);
    });
  }

  function renderContact() {
    const panel = byId("contact-content");
    const intro = node("p", "contact-intro");
    intro.textContent =
      "Open to robotics engineering roles and collaborations in perception, sensor fusion and autonomous navigation. The easiest way to reach me is email:";
    panel.append(intro);

    if (profile.email) {
      const link = node("a", "email-link", profile.email);
      link.href = "mailto:" + profile.email;
      panel.append(link);
    }

    const socials = node("div", "socials");
    if (profile.resume) {
      const cv = node("a", "btn btn-primary", "Download CV");
      cv.href = profile.resume;
      cv.target = "_blank";
      cv.rel = "noopener";
      socials.append(cv);
    }
    (profile.socials || []).forEach((social) => {
      const link = node("a", "btn btn-secondary", social.label + " ↗");
      link.href = social.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      socials.append(link);
    });
    if (socials.childNodes.length) panel.append(socials);

    if (profile.interests) {
      const interests = node("p", "interests");
      interests.append(node("strong", "", "Beyond work: "), document.createTextNode(profile.interests));
      panel.append(interests);
    }
  }

  function setupReveals() {
    if (reduceMotion || !("IntersectionObserver" in window)) return;
    const targets = document.querySelectorAll(".section-heading, .card, .video-group, .timeline-item, .video-card, .contact-panel");
    targets.forEach((target) => target.classList.add("reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    targets.forEach((target) => observer.observe(target));
  }

  function setupScrollSpy() {
    const links = Array.from(document.querySelectorAll(".site-nav a"));
    const sections = links
      .map((link) => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
          });
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
  }

  function setupThemeToggle() {
    const button = byId("theme-toggle");
    if (!button) return;
    const root = document.documentElement;
    const sync = () => {
      const isDark = root.getAttribute("data-theme") !== "light";
      button.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
      button.title = isDark ? "Light theme" : "Dark theme";
    };
    button.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch (e) {
        /* storage unavailable - theme still switches for this visit */
      }
      sync();
    });
    sync();
  }

  const year = byId("footer-year");
  if (year) year.textContent = String(new Date().getFullYear());

  renderHero();
  renderHeroVideo();
  renderExpertise();
  renderProjectIntro("turfrobot", "turfrobot-intro");
  renderProjectIntro("omnia", "omnia-intro");
  renderVideos();
  renderExperience();
  renderEducation();
  renderSkills();
  renderContact();
  setupReveals();
  setupScrollSpy();
  setupThemeToggle();
})();
