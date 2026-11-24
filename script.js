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
      byId("brand-mark").textContent = profile.name.trim().charAt(0).toUpperCase();
      byId("footer-name").textContent = profile.name;
      document.title = profile.name + (profile.role ? " - " + profile.role : " - Portfolio");
    }
    byId("hero-role").textContent = profile.role || "";
    byId("hero-name").textContent = profile.name || "Your Name";
    byId("hero-tagline").textContent = profile.tagline || "";
    byId("hero-intro").textContent = profile.intro || "";
    byId("hero-current").textContent = profile.current || "";

    const meta = byId("hero-meta");
    if (profile.location) {
      const location = node("span", "meta-item");
      location.append(node("span", "meta-icon", "⌖"), document.createTextNode(profile.location));
      meta.append(location);
    }

    const stats = byId("hero-stats");
    const items = [
      { value: "6+", label: "Years in robotics" },
      { value: String((data.experience || []).length), label: "Roles across the field" },
      { value: String((data.skills || []).length), label: "Skill areas" },
    ];
    items.forEach((item) => {
      const stat = node("div", "stat");
      stat.append(node("strong", "", item.value), node("span", "", item.label));
      stats.append(stat);
    });
  }

  function renderProjectIntro() {
    const intro = data.projectIntros && data.projectIntros.turfrobot;
    const target = byId("turfrobot-intro");
    if (!intro || !target) return;

    const panel = node("div", "project-intro card");
    const copy = node("div", "project-intro-copy");
    copy.append(node("p", "eyebrow", "Project spotlight"));
    if (intro.title) copy.append(node("h3", "", intro.title));
    if (intro.text) copy.append(node("p", "", intro.text));

    if (intro.highlights && intro.highlights.length) {
      const tags = node("div", "tag-list");
      intro.highlights.forEach((item) => tags.append(node("span", "tag", item)));
      copy.append(tags);
    }

    if (intro.url) {
      const link = node("a", "project-link", "Learn more about TurfRobot ↗");
      link.href = intro.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      copy.append(link);
    }

    panel.append(copy);
    target.append(panel);
  }

  function renderVideos() {
    const grid = byId("video-grid");
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
      grid.append(empty);
      byId("video-note").textContent =
        "Tip: in YouTube, set your video to “Unlisted”, then copy the ID from its link into data.js.";
      return;
    }

    videos.forEach((video) => {
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
      "Click a thumbnail for a short, muted looping preview. Use the link below a video to watch it in full on YouTube. Unlisted videos are viewable by anyone with the link - share mindfully.";
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
    intro.textContent = "Open to new projects and conversations. The easiest way to reach me is email:";
    panel.append(intro);

    if (profile.email) {
      const link = node("a", "email-link", profile.email);
      link.href = "mailto:" + profile.email;
      panel.append(link);
    }

    const socials = node("div", "socials");
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
    const targets = document.querySelectorAll(".section-heading, .card, .project-intro, .timeline-item, .video-card, .contact-panel");
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

  renderHero();
  renderProjectIntro();
  renderVideos();
  renderExperience();
  renderEducation();
  renderSkills();
  renderContact();
  setupReveals();
  setupScrollSpy();
})();
