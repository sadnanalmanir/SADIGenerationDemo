



<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-2cbc4060c4ac5481bfbedea9bb8fc752a93db97fca12f72ed99555906f567387.css" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-96ad60c299ea29f60354f3cd04103143fde49fa6c81f6c8573b8535c594ee9b0.css" media="all" rel="stylesheet" />
    
    
    
    

    <link as="script" href="https://assets-cdn.github.com/assets/frameworks-d7233eaabb7531aaf275fa71e7bca3c43cb11eae12c8359622bd13d725320aee.js" rel="preload" />
    <link as="script" href="https://assets-cdn.github.com/assets/github-f2186be20dc42f800f5005ebd4e64f4619aef00e8442281e3eab03ebb5a7a5ea.js" rel="preload" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>eligrey/FileSaver.js: An HTML5 saveAs() FileSaver implementation</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="https://avatars3.githubusercontent.com/u/46995?v=3&amp;s=400" name="twitter:image:src" /><meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="eligrey/FileSaver.js" name="twitter:title" /><meta content="FileSaver.js - An HTML5 saveAs() FileSaver implementation" name="twitter:description" />
      <meta content="https://avatars3.githubusercontent.com/u/46995?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="eligrey/FileSaver.js" property="og:title" /><meta content="https://github.com/eligrey/FileSaver.js" property="og:url" /><meta content="FileSaver.js - An HTML5 saveAs() FileSaver implementation" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/MjQ4ODYwMjpkNTFmNGJjOTQwZjgzZmM0MTU1NzVkNzRiMjE2YzMwYTpiZmE2MDM2OGMzYjI4MTRmOGIyZmE2M2E3Mjg1ODBlNTJiNWEzY2M2NjIwZmFjZGE0ZWM2YmZjNGIxM2I4YmM4--d00cf293a99c593d3c006d500df369209089a836">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="8EA7F37B:38F9:7DD8A50:56EF5CE1" name="octolytics-dimension-request_id" /><meta content="2488602" name="octolytics-actor-id" /><meta content="sadnanalmanir" name="octolytics-actor-login" /><meta content="2fabe436962d3ecb13f20c184ecd7611e250b3edcd8f86e7675f873c02b8805f" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged In">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="sadnanalmanir">

        <meta name="expected-hostname" content="github.com">
      <meta name="js-proxy-site-detection-payload" content="NDVjZDA5MDIwNzE5YzIwODNiMTNhYjYwNGU5YTk3Mjk2OTQ5NTVlYzcxZjIzZTk4MWU3ODM3YzE0MjU2NjRhNHx7InJlbW90ZV9hZGRyZXNzIjoiMTQyLjE2Ny4yNDMuMTIzIiwicmVxdWVzdF9pZCI6IjhFQTdGMzdCOjM4Rjk6N0REOEE1MDo1NkVGNUNFMSJ9">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="fd10fe6402d52ca1fe10396b219d2933910d4022" name="form-nonce" />

    <meta http-equiv="x-pjax-version" content="6d3ee4536202c3b6e04962b2a18271b6">
    

      
  <meta name="description" content="FileSaver.js - An HTML5 saveAs() FileSaver implementation">
  <meta name="go-import" content="github.com/eligrey/FileSaver.js git https://github.com/eligrey/FileSaver.js.git">

  <meta content="46995" name="octolytics-dimension-user_id" /><meta content="eligrey" name="octolytics-dimension-user_login" /><meta content="2051226" name="octolytics-dimension-repository_id" /><meta content="eligrey/FileSaver.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="2051226" name="octolytics-dimension-repository_network_root_id" /><meta content="eligrey/FileSaver.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/eligrey/FileSaver.js/commits/master.atom" rel="alternate" title="Recent Commits to FileSaver.js:master" type="application/atom+xml">


      <link rel="canonical" href="https://github.com/eligrey/FileSaver.js" data-pjax-transient>
  </head>


  <body class="logged_in   env-production linux vis-public">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="28" role="img" version="1.1" viewBox="0 0 16 16" width="28"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59 0.4 0.07 0.55-0.17 0.55-0.38 0-0.19-0.01-0.82-0.01-1.49-2.01 0.37-2.53-0.49-2.69-0.94-0.09-0.23-0.48-0.94-0.82-1.13-0.28-0.15-0.68-0.52-0.01-0.53 0.63-0.01 1.08 0.58 1.23 0.82 0.72 1.21 1.87 0.87 2.33 0.66 0.07-0.52 0.28-0.87 0.51-1.07-1.78-0.2-3.64-0.89-3.64-3.95 0-0.87 0.31-1.59 0.82-2.15-0.08-0.2-0.36-1.02 0.08-2.12 0 0 0.67-0.21 2.2 0.82 0.64-0.18 1.32-0.27 2-0.27 0.68 0 1.36 0.09 2 0.27 1.53-1.04 2.2-0.82 2.2-0.82 0.44 1.1 0.16 1.92 0.08 2.12 0.51 0.56 0.82 1.27 0.82 2.15 0 3.07-1.87 3.75-3.65 3.95 0.29 0.25 0.54 0.73 0.54 1.48 0 1.07-0.01 1.93-0.01 2.2 0 0.21 0.15 0.46 0.55 0.38C13.71 14.53 16 11.53 16 8 16 3.58 12.42 0 8 0z"></path></svg>
</a>


      <div class="site-search scoped-search js-site-search" role="search">
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/eligrey/FileSaver.js/search" class="js-site-search-form" data-scoped-search-url="/eligrey/FileSaver.js/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="form-control js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      aria-label="Search this repository"
      data-unscoped-placeholder="Search GitHub"
      data-scoped-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
      </div>

      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item">
    
    <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s js-socket-channel js-notification-indicator" data-channel="notification-changed-v2:2488602" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status "></span>
        <svg aria-hidden="true" class="octicon octicon-bell" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 12v1H0v-1l0.73-0.58c0.77-0.77 0.81-2.55 1.19-4.42 0.77-3.77 4.08-5 4.08-5 0-0.55 0.45-1 1-1s1 0.45 1 1c0 0 3.39 1.23 4.16 5 0.38 1.88 0.42 3.66 1.19 4.42l0.66 0.58z m-7 4c1.11 0 2-0.89 2-2H5c0 1.11 0.89 2 2 2z"></path></svg>
</a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus left" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"></path></svg>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="eligrey/FileSaver.js">This repository</span>
  </div>
    <a class="dropdown-item" href="/eligrey/FileSaver.js/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/sadnanalmanir"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@sadnanalmanir" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/2488602?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu  dropdown-menu-sw">
        <div class=" dropdown-header header-nav-current-user css-truncate">
            Signed in as <strong class="css-truncate-target">sadnanalmanir</strong>

        </div>


        <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/sadnanalmanir" data-ga-click="Header, go to profile, text:your profile">
            Your profile
          </a>
        <a class="dropdown-item" href="/stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
          <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
            Explore
          </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>


          <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
            Settings
          </a>

          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="fd10fe6402d52ca1fe10396b219d2933910d4022" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="F5bQQ16yt7nfmGGSYcqVGt+UD5a1f3G6liuuKUBGrDSPu1OglY8MSyKL45GO+K7u+NvV/G5KwhRUHOnDV3p/bA==" /></div>
            <button class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
              Sign out
            </button>
</form>
      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>

        

      


    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" class="context-loader-container js-repo-nav-next" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="fd10fe6402d52ca1fe10396b219d2933910d4022" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="8ASGOJus4iPf+UsLovrTKBNVwNuDKyGZW/mo7VBvHdpIZVKYFeyiNJC8n1bQEp9gBU/7lPK/J58OVdwufyrLeQ==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="2051226" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/eligrey/FileSaver.js/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:files#disambiguate">
            <span class="js-select-button">
              <svg aria-hidden="true" class="octicon octicon-eye" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6c4.94 0 7.94-6 7.94-6S13 2 8.06 2z m-0.06 10c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4z m2-4c0 1.11-0.89 2-2 2s-2-0.89-2-2 0.89-2 2-2 2 0.89 2 2z"></path></svg>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count" href="/eligrey/FileSaver.js/watchers">
            187
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6c4.94 0 7.94-6 7.94-6S13 2 8.06 2z m-0.06 10c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4z m2-4c0 1.11-0.89 2-2 2s-2-0.89-2-2 0.89-2 2-2 2 0.89 2 2z"></path></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6c4.94 0 7.94-6 7.94-6S13 2 8.06 2z m-0.06 10c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4z m2-4c0 1.11-0.89 2-2 2s-2-0.89-2-2 0.89-2 2-2 2 0.89 2 2z"></path></svg>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8 2.81v10.38c0 0.67-0.81 1-1.28 0.53L3 10H1c-0.55 0-1-0.45-1-1V7c0-0.55 0.45-1 1-1h2l3.72-3.72c0.47-0.47 1.28-0.14 1.28 0.53z m7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06 1.97 1.97-1.97 1.97 1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06-1.97-1.97 1.97-1.97z"></path></svg>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/eligrey/FileSaver.js/unstar" class="js-toggler-form starred" data-form-nonce="fd10fe6402d52ca1fe10396b219d2933910d4022" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="tOuowlv20qRwH6FMkQI8EBlEHJS8SqJHUd6iDJf0gd2jRj/KiQ6vj2I0maIXr+b1PxawvC0MCHKAGRL4+10m2g==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar eligrey/FileSaver.js"
        data-ga-click="Repository, click unstar button, action:files#disambiguate; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-0.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14l4.33-2.33 4.33 2.33L10.4 9.26 14 6z"></path></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/eligrey/FileSaver.js/stargazers">
          3,527
        </a>
</form>
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/eligrey/FileSaver.js/star" class="js-toggler-form unstarred" data-form-nonce="fd10fe6402d52ca1fe10396b219d2933910d4022" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="kZuRHTFWf0VZ3j0na8I4zRT2OkxQhxew18zX9+sX0qsMVDYF9EwBAp2jvBG1c5bDhV3CrQgKGRoPBpQq7oCfFA==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star eligrey/FileSaver.js"
        data-ga-click="Repository, click star button, action:files#disambiguate; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-0.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14l4.33-2.33 4.33 2.33L10.4 9.26 14 6z"></path></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/eligrey/FileSaver.js/stargazers">
          3,527
        </a>
</form>  </div>

  </li>

  <li>
          <a href="#fork-destination-box" class="btn btn-sm btn-with-count"
              title="Fork your own copy of eligrey/FileSaver.js to your account"
              aria-label="Fork your own copy of eligrey/FileSaver.js to your account"
              rel="facebox"
              data-ga-click="Repository, show fork modal, action:files#disambiguate; text:Fork">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" role="img" version="1.1" viewBox="0 0 10 16" width="10"><path d="M8 1c-1.11 0-2 0.89-2 2 0 0.73 0.41 1.38 1 1.72v1.28L5 8 3 6v-1.28c0.59-0.34 1-0.98 1-1.72 0-1.11-0.89-2-2-2S0 1.89 0 3c0 0.73 0.41 1.38 1 1.72v1.78l3 3v1.78c-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72V9.5l3-3V4.72c0.59-0.34 1-0.98 1-1.72 0-1.11-0.89-2-2-2zM2 4.2c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z m3 10c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z m3-10c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z"></path></svg>
            Fork
          </a>

          <div id="fork-destination-box" style="display: none;">
            <h2 class="facebox-header" data-facebox-id="facebox-header">Where should we fork this repository?</h2>
            <include-fragment src=""
                class="js-fork-select-fragment fork-select-fragment"
                data-url="/eligrey/FileSaver.js/fork?fragment=1">
              <img alt="Loading" height="64" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-128.gif" width="64" />
            </include-fragment>
          </div>

    <a href="/eligrey/FileSaver.js/network" class="social-count">
      769
    </a>
  </li>
</ul>

    <h1 class="entry-title public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M4 9h-1v-1h1v1z m0-3h-1v1h1v-1z m0-2h-1v1h1v-1z m0-2h-1v1h1v-1z m8-1v12c0 0.55-0.45 1-1 1H6v2l-1.5-1.5-1.5 1.5V14H1c-0.55 0-1-0.45-1-1V1C0 0.45 0.45 0 1 0h10c0.55 0 1 0.45 1 1z m-1 10H1v2h2v-1h3v1h5V11z m0-10H2v9h9V1z"></path></svg>
  <span class="author" itemprop="author"><a href="/eligrey" class="url fn" rel="author">eligrey</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/eligrey/FileSaver.js" data-pjax="#js-repo-pjax-container">FileSaver.js</a></strong>

  <span class="page-context-loader">
    <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
  </span>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/eligrey/FileSaver.js" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /eligrey/FileSaver.js" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path d="M9.5 3l-1.5 1.5 3.5 3.5L8 11.5l1.5 1.5 4.5-5L9.5 3zM4.5 3L0 8l4.5 5 1.5-1.5L2.5 8l3.5-3.5L4.5 3z"></path></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/eligrey/FileSaver.js/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /eligrey/FileSaver.js/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7S10.14 13.7 7 13.7 1.3 11.14 1.3 8s2.56-5.7 5.7-5.7m0-1.3C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7S10.86 1 7 1z m1 3H6v5h2V4z m0 6H6v2h2V10z"></path></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">42</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/eligrey/FileSaver.js/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /eligrey/FileSaver.js/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 11.28c0-1.73 0-6.28 0-6.28-0.03-0.78-0.34-1.47-0.94-2.06s-1.28-0.91-2.06-0.94c0 0-1.02 0-1 0V0L4 3l3 3V4h1c0.27 0.02 0.48 0.11 0.69 0.31s0.3 0.42 0.31 0.69v6.28c-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72z m-1 2.92c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2zM4 3c0-1.11-0.89-2-2-2S0 1.89 0 3c0 0.73 0.41 1.38 1 1.72 0 1.55 0 5.56 0 6.56-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72V4.72c0.59-0.34 1-0.98 1-1.72z m-0.8 10c0 0.66-0.55 1.2-1.2 1.2s-1.2-0.55-1.2-1.2 0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2z m-1.2-8.8c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z"></path></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">8</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/eligrey/FileSaver.js/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /eligrey/FileSaver.js/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M2 5h4v1H2v-1z m0 3h4v-1H2v1z m0 2h4v-1H2v1z m11-5H9v1h4v-1z m0 2H9v1h4v-1z m0 2H9v1h4v-1z m2-6v9c0 0.55-0.45 1-1 1H8.5l-1 1-1-1H1c-0.55 0-1-0.45-1-1V3c0-0.55 0.45-1 1-1h5.5l1 1 1-1h5.5c0.55 0 1 0.45 1 1z m-8 0.5l-0.5-0.5H1v9h6V3.5z m7-0.5H8.5l-0.5 0.5v8.5h6V3z"></path></svg>
      Wiki
</a>
  <a href="/eligrey/FileSaver.js/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /eligrey/FileSaver.js/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0V10h3.6L4.5 8.2l0.9 5.4L9 8.5l1.6 1.5H14V8H11.5z"></path></svg>
    Pulse
</a>
  <a href="/eligrey/FileSaver.js/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /eligrey/FileSaver.js/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M16 14v1H0V0h1v14h15z m-11-1H3V8h2v5z m4 0H7V3h2v10z m4 0H11V6h2v7z"></path></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    
<div class="repository-meta js-details-container">
  <span class="repository-meta-content">
        <span itemprop="about"> An HTML5 saveAs() FileSaver implementation</span>
        <span itemprop="url"><a href="http://eligrey.com/blog/post/saving-generated-files-on-the-client-side" rel="nofollow">http://eligrey.com/blog/post/saving-generated-files-on-the-client-side</a></span>
  </span>

</div>


  <div class="overall-summary overall-summary-bottomless">
    <div class="stats-switcher-viewport js-stats-switcher-viewport">
      <div class="stats-switcher-wrapper">
      <ul class="numbers-summary">
        <li class="commits">
          <a data-pjax href="/eligrey/FileSaver.js/commits/master">
              <svg aria-hidden="true" class="octicon octicon-history" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path d="M8 13H6V6h5v2H8v5zM7 1c-2.19 0-4.13 1.02-5.41 2.59L0 2v4h4l-1.5-1.5c1.05-1.33 2.67-2.2 4.5-2.2 3.14 0 5.7 2.56 5.7 5.7S10.14 13.7 7 13.7 1.3 11.14 1.3 8c0-0.34 0.03-0.67 0.09-1H0.08c-0.05 0.33-0.08 0.66-0.08 1 0 3.86 3.14 7 7 7s7-3.14 7-7S10.86 1 7 1z"></path></svg>
              <span class="num text-emphasized">
                186
              </span>
              commits
          </a>
        </li>
        <li>
          <a data-pjax href="/eligrey/FileSaver.js/branches">
            <svg aria-hidden="true" class="octicon octicon-git-branch" height="16" role="img" version="1.1" viewBox="0 0 10 16" width="10"><path d="M10 5c0-1.11-0.89-2-2-2s-2 0.89-2 2c0 0.73 0.41 1.38 1 1.72v0.3c-0.02 0.52-0.23 0.98-0.63 1.38s-0.86 0.61-1.38 0.63c-0.83 0.02-1.48 0.16-2 0.45V4.72c0.59-0.34 1-0.98 1-1.72 0-1.11-0.89-2-2-2S0 1.89 0 3c0 0.73 0.41 1.38 1 1.72v6.56C0.41 11.63 0 12.27 0 13c0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.53-0.2-1-0.53-1.36 0.09-0.06 0.48-0.41 0.59-0.47 0.25-0.11 0.56-0.17 0.94-0.17 1.05-0.05 1.95-0.45 2.75-1.25s1.2-1.98 1.25-3.02h-0.02c0.61-0.36 1.02-1 1.02-1.73zM2 1.8c0.66 0 1.2 0.55 1.2 1.2s-0.55 1.2-1.2 1.2-1.2-0.55-1.2-1.2 0.55-1.2 1.2-1.2z m0 12.41c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z m6-8c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z"></path></svg>
            <span class="num text-emphasized">
              1
            </span>
            branch
          </a>
        </li>

        <li>
          <a data-pjax href="/eligrey/FileSaver.js/releases">
            <svg aria-hidden="true" class="octicon octicon-tag" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path d="M6.73 2.73c-0.47-0.47-1.11-0.73-1.77-0.73H2.5C1.13 2 0 3.13 0 4.5v2.47c0 0.66 0.27 1.3 0.73 1.77l6.06 6.06c0.39 0.39 1.02 0.39 1.41 0l4.59-4.59c0.39-0.39 0.39-1.02 0-1.41L6.73 2.73zM1.38 8.09c-0.31-0.3-0.47-0.7-0.47-1.13V4.5c0-0.88 0.72-1.59 1.59-1.59h2.47c0.42 0 0.83 0.16 1.13 0.47l6.14 6.13-4.73 4.73L1.38 8.09z m0.63-4.09h2v2H2V4z"></path></svg>
            <span class="num text-emphasized">
              0
            </span>
            releases
          </a>
        </li>

        <li>
            <a href="/eligrey/FileSaver.js/graphs/contributors">
    <span class="num text-emphasized">
      23
    </span>
    contributors
</a>

        </li>
      </ul>

        <div class="repository-lang-stats">
          <ol class="repository-lang-stats-numbers">
            <li>
                <a href="/eligrey/FileSaver.js/search?l=javascript"  data-ga-click="Repository, language stats search click, location:repo overview">
                  <span class="color-block language-color" style="background-color:#f1e05a;"></span>
                  <span class="lang">JavaScript</span>
                  <span class="percent">78.9%</span>
                </a>
            </li>
            <li>
                <a href="/eligrey/FileSaver.js/search?l=html"  data-ga-click="Repository, language stats search click, location:repo overview">
                  <span class="color-block language-color" style="background-color:#e44b23;"></span>
                  <span class="lang">HTML</span>
                  <span class="percent">15.8%</span>
                </a>
            </li>
            <li>
                <a href="/eligrey/FileSaver.js/search?l=css"  data-ga-click="Repository, language stats search click, location:repo overview">
                  <span class="color-block language-color" style="background-color:#563d7c;"></span>
                  <span class="lang">CSS</span>
                  <span class="percent">5.3%</span>
                </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>

    <div class="repository-lang-stats-graph js-toggle-lang-stats" title="Click for language details" data-ga-click="Repository, language bar stats toggle, location:repo overview">
      <span class="language-color" aria-label="JavaScript 78.9%" style="width:78.9%; background-color:#f1e05a;" itemprop="programmingLanguage">JavaScript</span>
      <span class="language-color" aria-label="HTML 15.8%" style="width:15.8%; background-color:#e44b23;" itemprop="programmingLanguage">HTML</span>
      <span class="language-color" aria-label="CSS 5.3%" style="width:5.3%; background-color:#563d7c;" itemprop="programmingLanguage">CSS</span>
    </div>

    <include-fragment src="/eligrey/FileSaver.js/show_partial?partial=tree%2Frecently_touched_branches_list"></include-fragment>

  <div class="file-navigation in-mid-page">
  <div class="right">
    <div class="btn-group">
      
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/eligrey/FileSaver.js/new/master" class="btn-group-form" data-form-nonce="fd10fe6402d52ca1fe10396b219d2933910d4022" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="5hyci2wxUZAFvtk0p2uf15mfDdAUcxJ9q9bDOCMBV+OSTWV+bYgUO0lueewuIHbivC24se+YzSaPDKOYIKh2Cw==" /></div>
    <button class="btn btn-sm" type="submit" data-disable-with="Creating file…">
        New file
    </button>
</form>

        <a href="/eligrey/FileSaver.js/upload" class="btn btn-sm">
          Upload files
        </a>

      <a href="/eligrey/FileSaver.js/find/master"
        class="btn btn-sm empty-icon right js-pjax-capture-input"
        data-pjax
        data-hotkey="t"
        data-ga-click="Repository, find file, location:repo overview">
        Find file
      </a>
    </div>
      <div class="file-navigation-options" data-multiple>

        <div class="file-navigation-option">
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol" class="js-set-user-protocol-preference" data-form-nonce="fd10fe6402d52ca1fe10396b219d2933910d4022" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="GYeaeUqcur7b26eIxWiWjO3ByCUCB5paMnYlZ2fg+xxQ+gijo0lhg0vx2A6PKceUAtNlcYvoJHLIveSeUAWbFA==" /></div>
            <input type="hidden" name="protocol_type" value="clone">

            <div class="select-menu js-menu-container js-select-menu">
              <div class="input-group js-select-button js-zeroclipboard-container">
                <div class="input-group-button">
  <button type="button" class="btn btn-sm select-menu-button js-menu-target" data-ga-click="Repository, clone HTTPS, location:repo overview">
    HTTPS
  </button>
</div>
<input type="text" class="form-control input-monospace input-sm js-zeroclipboard-target js-url-field" value="https://github.com/eligrey/FileSaver.js.git" readonly>
<div class="input-group-button">
  <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><svg aria-hidden="true" class="octicon octicon-clippy" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path d="M2 12h4v1H2v-1z m5-6H2v1h5v-1z m2 3V7L6 10l3 3V11h5V9H9z m-4.5-1H2v1h2.5v-1zM2 11h2.5v-1H2v1z m9 1h1v2c-0.02 0.28-0.11 0.52-0.3 0.7s-0.42 0.28-0.7 0.3H1c-0.55 0-1-0.45-1-1V3c0-0.55 0.45-1 1-1h3C4 0.89 4.89 0 6 0s2 0.89 2 2h3c0.55 0 1 0.45 1 1v5h-1V5H1v9h10V12zM2 4h8c0-0.55-0.45-1-1-1h-1c-0.55 0-1-0.45-1-1s-0.45-1-1-1-1 0.45-1 1-0.45 1-1 1h-1c-0.55 0-1 0.45-1 1z"></path></svg></button>
</div>

              </div>

              <div class="select-menu-modal-holder">
                <div class="select-menu-modal js-menu-content" aria-hidden="true">
                  <div class="select-menu-header">
                    <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
                    <span class="select-menu-title">Choose a clone URL</span>
                  </div>

                  <div class="select-menu-list js-navigation-container" role="menu">
                      <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                        <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
                        <div class="select-menu-item-text">
                          <input type="radio" name="protocol_selector" value="http" checked>
                          <span class="select-menu-item-heading">
                            HTTPS
                            (recommended)
                          </span>
                            <span class="description">
                              Clone with Git or checkout with SVN using the repository's web address.
                            </span>
                          <span class="js-select-button-text hidden-select-button-text">
                            <div class="input-group-button">
  <button type="button" class="btn btn-sm select-menu-button js-menu-target" data-ga-click="Repository, clone HTTPS, location:repo overview">
    HTTPS
  </button>
</div>
<input type="text" class="form-control input-monospace input-sm js-zeroclipboard-target js-url-field" value="https://github.com/eligrey/FileSaver.js.git" readonly>
<div class="input-group-button">
  <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><svg aria-hidden="true" class="octicon octicon-clippy" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path d="M2 12h4v1H2v-1z m5-6H2v1h5v-1z m2 3V7L6 10l3 3V11h5V9H9z m-4.5-1H2v1h2.5v-1zM2 11h2.5v-1H2v1z m9 1h1v2c-0.02 0.28-0.11 0.52-0.3 0.7s-0.42 0.28-0.7 0.3H1c-0.55 0-1-0.45-1-1V3c0-0.55 0.45-1 1-1h3C4 0.89 4.89 0 6 0s2 0.89 2 2h3c0.55 0 1 0.45 1 1v5h-1V5H1v9h10V12zM2 4h8c0-0.55-0.45-1-1-1h-1c-0.55 0-1-0.45-1-1s-0.45-1-1-1-1 0.45-1 1-0.45 1-1 1h-1c-0.55 0-1 0.45-1 1z"></path></svg></button>
</div>

                          </span>
                        </div>
                      </div>
                      <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                        <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
                        <div class="select-menu-item-text">
                          <input type="radio" name="protocol_selector" value="ssh" >
                          <span class="select-menu-item-heading">
                            SSH
                            
                          </span>
                            <span class="description">
                              Clone with an SSH key and passphrase from your GitHub settings.
                            </span>
                          <span class="js-select-button-text hidden-select-button-text">
                            <div class="input-group-button">
  <button type="button" class="btn btn-sm select-menu-button js-menu-target" data-ga-click="Repository, clone SSH, location:repo overview">
    SSH
  </button>
</div>
<input type="text" class="form-control input-monospace input-sm js-zeroclipboard-target js-url-field" value="git@github.com:eligrey/FileSaver.js.git" readonly>
<div class="input-group-button">
  <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><svg aria-hidden="true" class="octicon octicon-clippy" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path d="M2 12h4v1H2v-1z m5-6H2v1h5v-1z m2 3V7L6 10l3 3V11h5V9H9z m-4.5-1H2v1h2.5v-1zM2 11h2.5v-1H2v1z m9 1h1v2c-0.02 0.28-0.11 0.52-0.3 0.7s-0.42 0.28-0.7 0.3H1c-0.55 0-1-0.45-1-1V3c0-0.55 0.45-1 1-1h3C4 0.89 4.89 0 6 0s2 0.89 2 2h3c0.55 0 1 0.45 1 1v5h-1V5H1v9h10V12zM2 4h8c0-0.55-0.45-1-1-1h-1c-0.55 0-1-0.45-1-1s-0.45-1-1-1-1 0.45-1 1-0.45 1-1 1h-1c-0.55 0-1 0.45-1 1z"></path></svg></button>
</div>

                          </span>
                        </div>
                      </div>
                  </div>
                  <div class="select-menu-list" role="menu">
                    <a class="select-menu-item select-menu-action" href="https://help.github.com/articles/which-remote-url-should-i-use" target="_blank">
                      <svg aria-hidden="true" class="octicon octicon-question select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path d="M6 10h2v2H6V10z m4-3.5c0 2.14-2 2.5-2 2.5H6c0-0.55 0.45-1 1-1h0.5c0.28 0 0.5-0.22 0.5-0.5v-1c0-0.28-0.22-0.5-0.5-0.5h-1c-0.28 0-0.5 0.22-0.5 0.5v0.5H4c0-1.5 1.5-3 3-3s3 1 3 2.5zM7 2.3c3.14 0 5.7 2.56 5.7 5.7S10.14 13.7 7 13.7 1.3 11.14 1.3 8s2.56-5.7 5.7-5.7m0-1.3C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7S10.86 1 7 1z"></path></svg>
                      <div class="select-menu-item-text">
                        Learn more about clone URLs
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
</form>        </div>

          <div class="file-navigation-option">
  </div>


        <div class="file-navigation-option">
          <a href="/eligrey/FileSaver.js/archive/master.zip"
             class="btn btn-sm"
             rel="nofollow"
             data-ga-click="Repository, download zip, location:repo overview">
            Download ZIP
          </a>
        </div>
      </div>
  </div>

  
<div class="select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/eligrey/FileSaver.js/tree/master"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>


      <a href="/eligrey/FileSaver.js/pull/new/master" class="btn btn-sm btn-primary new-pull-request-btn" data-pjax data-ga-click="Repository, new pull request, location:repo overview">
        New pull request
      </a>

  <div class="breadcrumb">
    
  </div>
</div>





  <div class="commit-tease js-details-container">
    <span class="right">
      Latest commit
      <a class="commit-tease-sha" href="/eligrey/FileSaver.js/commit/7ef5187eeb76053ebce4b1d9d05406b0c2dbb290" data-pjax>
        7ef5187
      </a>
      <span itemprop="dateModified"><time datetime="2016-03-19T23:12:36Z" is="relative-time">Mar 19, 2016</time></span>
    </span>


    <span class="commit-author-section">
      <img alt="@eligrey" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/46995?v=3&amp;s=40" width="20" />
      <a href="/eligrey" class="user-mention" rel="author">eligrey</a>
    </span>

        <a href="/eligrey/FileSaver.js/commit/7ef5187eeb76053ebce4b1d9d05406b0c2dbb290" class="message" data-pjax="true" title="Merge pull request #208 from evilaliv3/issue/207

Fix issue #207">Merge pull request</a> <a href="https://github.com/eligrey/FileSaver.js/pull/208" class="issue-link js-issue-link" data-url="https://github.com/eligrey/FileSaver.js/issues/208" data-id="142006632" data-error-text="Failed to load issue title" data-permission-text="Issue title is private">#208</a> <a href="/eligrey/FileSaver.js/commit/7ef5187eeb76053ebce4b1d9d05406b0c2dbb290" class="message" data-pjax="true" title="Merge pull request #208 from evilaliv3/issue/207

Fix issue #207">from evilaliv3/issue/207</a>
          <span class="hidden-text-expander inline">
            <button type="button" class="ellipsis-expander js-details-target">&hellip;</button>
          </span>
    </span>

      <div class="commit-desc"><pre class="text-small">Fix issue <a href="https://github.com/eligrey/FileSaver.js/issues/207" class="issue-link js-issue-link" data-url="https://github.com/eligrey/FileSaver.js/issues/207" data-id="142006528" data-error-text="Failed to load issue title" data-permission-text="Issue title is private">#207</a></pre></div>
  </div>


<div class="file-wrap">

  <a href="/eligrey/FileSaver.js/tree/7ef5187eeb76053ebce4b1d9d05406b0c2dbb290" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <table class="files js-navigation-container js-active-navigation-container" data-pjax>


    <tbody>
      <tr class="warning include-fragment-error">
        <td class="icon"><svg aria-hidden="true" class="octicon octicon-alert" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15.72 12.5l-6.85-11.98C8.69 0.21 8.36 0.02 8 0.02s-0.69 0.19-0.87 0.5l-6.85 11.98c-0.18 0.31-0.18 0.69 0 1C0.47 13.81 0.8 14 1.15 14h13.7c0.36 0 0.69-0.19 0.86-0.5S15.89 12.81 15.72 12.5zM9 12H7V10h2V12zM9 9H7V5h2V9z"></path></svg></td>
        <td class="content" colspan="3">Failed to load latest commit information.</td>
      </tr>

        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-directory" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path d="M13 4H7v-1c0-0.66-0.31-1-1-1H1c-0.55 0-1 0.45-1 1v10c0 0.55 0.45 1 1 1h12c0.55 0 1-0.45 1-1V5c0-0.55-0.45-1-1-1z m-7 0H1v-1h5v1z"></path></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/eligrey/FileSaver.js/tree/master/demo" class="js-directory-link js-navigation-open" id="fe01ce2a7fbac8fafaed7c982a04e229-7c8b118f4b741b505aae4a6369d50731331d53a6" title="demo">demo</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/eligrey/FileSaver.js/commit/191d4fc695e35f1e4e2d607b07bcd5f433c54780" class="message" data-pjax="true" title="Fix demo paths

Blob.min.js does not exist, change to Blob.js

Replace raw.github.com w/ cdn.rawgit.com -- fixed &quot;strict MIME type checking is enabled&quot; as per: 

http://stackoverflow.com/questions/17341122/link-and-execute-external-javascript-file-hosted-on-github">Fix demo paths</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-11-06T22:25:51Z" is="time-ago">Nov 6, 2014</time></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-text" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M6 5H2v-1h4v1zM2 8h7v-1H2v1z m0 2h7v-1H2v1z m0 2h7v-1H2v1z m10-7.5v9.5c0 0.55-0.45 1-1 1H1c-0.55 0-1-0.45-1-1V2c0-0.55 0.45-1 1-1h7.5l3.5 3.5z m-1 0.5L8 2H1v12h10V5z"></path></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/eligrey/FileSaver.js/blob/master/FileSaver.js" class="js-directory-link js-navigation-open" id="a1994ccf4140c4d9a0fdecf2698de179-b76f8fb6c78abde5c60002bdf432dc1a1886cffb" title="FileSaver.js">FileSaver.js</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/eligrey/FileSaver.js/commit/ae7b37aef22ca3d7577ab5dd7a883fe343198bc3" class="message" data-pjax="true" title="Update sourcecode date">Update sourcecode date</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2016-03-19T09:18:10Z" is="time-ago">Mar 19, 2016</time></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-text" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M6 5H2v-1h4v1zM2 8h7v-1H2v1z m0 2h7v-1H2v1z m0 2h7v-1H2v1z m10-7.5v9.5c0 0.55-0.45 1-1 1H1c-0.55 0-1-0.45-1-1V2c0-0.55 0.45-1 1-1h7.5l3.5 3.5z m-1 0.5L8 2H1v12h10V5z"></path></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/eligrey/FileSaver.js/blob/master/FileSaver.min.js" class="js-directory-link js-navigation-open" id="290258ac7bf24d47d0b0011ba70e063a-eb062f2590a3b5d3fdec49cb619fea82b78646fb" title="FileSaver.min.js">FileSaver.min.js</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/eligrey/FileSaver.js/commit/04f232f658b0d70cad0a2bebf5a514de2deab40a" class="message" data-pjax="true" title="Fix #165, Saving multiple files">Fix</a> <a href="https://github.com/eligrey/FileSaver.js/issues/165" class="issue-link js-issue-link" data-url="https://github.com/eligrey/FileSaver.js/issues/165" data-id="99188539" data-error-text="Failed to load issue title" data-permission-text="Issue title is private">#165</a><a href="/eligrey/FileSaver.js/commit/04f232f658b0d70cad0a2bebf5a514de2deab40a" class="message" data-pjax="true" title="Fix #165, Saving multiple files">, Saving multiple files</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-11-19T05:07:28Z" is="time-ago">Nov 19, 2015</time></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-text" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M6 5H2v-1h4v1zM2 8h7v-1H2v1z m0 2h7v-1H2v1z m0 2h7v-1H2v1z m10-7.5v9.5c0 0.55-0.45 1-1 1H1c-0.55 0-1-0.45-1-1V2c0-0.55 0.45-1 1-1h7.5l3.5 3.5z m-1 0.5L8 2H1v12h10V5z"></path></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/eligrey/FileSaver.js/blob/master/LICENSE.md" class="js-directory-link js-navigation-open" id="37854d19817c792316d481f5beb93cc7-9e3115bd5ec3b4bfbc3f739b3c835d511f340e00" itemprop="license" title="LICENSE.md">LICENSE.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/eligrey/FileSaver.js/commit/24b303f49213b905ec9062b708f7cd43d56a5dde" class="message" data-pjax="true" title="Update license date">Update license date</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-01-04T08:41:52Z" is="time-ago">Jan 4, 2015</time></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-text" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M6 5H2v-1h4v1zM2 8h7v-1H2v1z m0 2h7v-1H2v1z m0 2h7v-1H2v1z m10-7.5v9.5c0 0.55-0.45 1-1 1H1c-0.55 0-1-0.45-1-1V2c0-0.55 0.45-1 1-1h7.5l3.5 3.5z m-1 0.5L8 2H1v12h10V5z"></path></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/eligrey/FileSaver.js/blob/master/README.md" class="js-directory-link js-navigation-open" id="04c6e90faac2675aa89e2176d2eec7d8-e48dd96d5520aac54ecd3f9488866f79ac116088" title="README.md">README.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/eligrey/FileSaver.js/commit/54c04285aedaec973f5f725f18c624a3fb12cf63" class="message" data-pjax="true" title="update dist and readme">update dist and readme</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-10-03T20:38:09Z" is="time-ago">Oct 3, 2015</time></span>
          </td>
        </tr>
    </tbody>
  </table>

</div>



  <div id="readme" class="readme boxed-group clearfix announce instapaper_body md">
    <h3>
      <svg aria-hidden="true" class="octicon octicon-book" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M2 5h4v1H2v-1z m0 3h4v-1H2v1z m0 2h4v-1H2v1z m11-5H9v1h4v-1z m0 2H9v1h4v-1z m0 2H9v1h4v-1z m2-6v9c0 0.55-0.45 1-1 1H8.5l-1 1-1-1H1c-0.55 0-1-0.45-1-1V3c0-0.55 0.45-1 1-1h5.5l1 1 1-1h5.5c0.55 0 1 0.45 1 1z m-8 0.5l-0.5-0.5H1v9h6V3.5z m7-0.5H8.5l-0.5 0.5v8.5h6V3z"></path></svg>
      README.md
    </h3>

      <article class="markdown-body entry-content" itemprop="text"><h1><a id="user-content-filesaverjs" class="anchor" href="#filesaverjs" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>FileSaver.js</h1>

<p>FileSaver.js implements the HTML5 W3C <code>saveAs()</code> FileSaver interface in browsers that do
not natively support it. There is a <a href="http://eligrey.com/demos/FileSaver.js/">FileSaver.js demo</a> that demonstrates saving
various media types.</p>

<p>FileSaver.js is the solution to saving files on the client-side, and is perfect for
webapps that need to generate files, or for saving sensitive information that shouldn't be
sent to an external server.</p>

<p>Looking for <code>canvas.toBlob()</code> for saving canvases? Check out
<a href="https://github.com/eligrey/canvas-toBlob.js">canvas-toBlob.js</a> for a cross-browser implementation.</p>

<h2><a id="user-content-supported-browsers" class="anchor" href="#supported-browsers" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Supported browsers</h2>

<table><thead>
<tr>
<th>Browser</th>
<th>Constructs as</th>
<th>Filenames</th>
<th>Max Blob Size</th>
<th>Dependencies</th>
</tr>
</thead><tbody>
<tr>
<td>Firefox 20+</td>
<td>Blob</td>
<td>Yes</td>
<td>800 MiB</td>
<td>None</td>
</tr>
<tr>
<td>Firefox &lt; 20</td>
<td>data: URI</td>
<td>No</td>
<td>n/a</td>
<td><a href="https://github.com/eligrey/Blob.js">Blob.js</a></td>
</tr>
<tr>
<td>Chrome</td>
<td>Blob</td>
<td>Yes</td>
<td><a href="https://code.google.com/p/chromium/issues/detail?id=375297">500 MiB</a></td>
<td>None</td>
</tr>
<tr>
<td>Chrome for Android</td>
<td>Blob</td>
<td>Yes</td>
<td><a href="https://code.google.com/p/chromium/issues/detail?id=375297">500 MiB</a></td>
<td>None</td>
</tr>
<tr>
<td>IE 10+</td>
<td>Blob</td>
<td>Yes</td>
<td>600 MiB</td>
<td>None</td>
</tr>
<tr>
<td>Opera 15+</td>
<td>Blob</td>
<td>Yes</td>
<td>500 MiB</td>
<td>None</td>
</tr>
<tr>
<td>Opera &lt; 15</td>
<td>data: URI</td>
<td>No</td>
<td>n/a</td>
<td><a href="https://github.com/eligrey/Blob.js">Blob.js</a></td>
</tr>
<tr>
<td>Safari 6.1+*</td>
<td>Blob</td>
<td>No</td>
<td>?</td>
<td>None</td>
</tr>
<tr>
<td>Safari &lt; 6</td>
<td>data: URI</td>
<td>No</td>
<td>n/a</td>
<td><a href="https://github.com/eligrey/Blob.js">Blob.js</a></td>
</tr>
</tbody></table>

<p>Feature detection is possible:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-k">try</span> {
    <span class="pl-k">var</span> isFileSaverSupported <span class="pl-k">=</span> <span class="pl-k">!!</span><span class="pl-k">new</span> <span class="pl-en">Blob</span>;
} <span class="pl-k">catch</span> (e) {}</pre></div>

<h3><a id="user-content-ie--10" class="anchor" href="#ie--10" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>IE &lt; 10</h3>

<p>It is possible to save text files in IE &lt; 10 without Flash-based polyfills.
See <a href="https://github.com/koffsyrup/FileSaver.js#examples">ChenWenBrian and koffsyrup's <code>saveTextAs()</code></a> for more details.</p>

<h3><a id="user-content-safari-61" class="anchor" href="#safari-61" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Safari 6.1+</h3>

<p>Blobs may be opened instead of saved sometimes—you may have to direct your Safari users to manually
press <kbd>⌘</kbd>+<kbd>S</kbd> to save the file after it is opened. Using the <code>application/octet-stream</code> MIME type to force downloads <a href="https://github.com/eligrey/FileSaver.js/issues/12#issuecomment-47247096">can cause issues in Safari</a>.</p>

<h3><a id="user-content-ios" class="anchor" href="#ios" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>iOS</h3>

<p>saveAs must be run within a user interaction event such as onTouchDown or onClick; setTimeout will prevent saveAs from triggering. Due to restrictions in iOS saveAs opens in a new window instead of downloading, if you want this fixed please <a href="https://bugs.webkit.org/show_bug.cgi?id=102914">tell Apple</a> how this bug is affecting you.</p>

<h2><a id="user-content-syntax" class="anchor" href="#syntax" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Syntax</h2>

<div class="highlight highlight-source-js"><pre>FileSaver <span class="pl-en">saveAs</span>(Blob data, DOMString filename, optional <span class="pl-c1">Boolean</span> disableAutoBOM)</pre></div>

<p>Pass <code>true</code> for <code>disableAutoBOM</code> if you don't want FileSaver.js to automatically provide Unicode text encoding hints (see: <a href="https://en.wikipedia.org/wiki/Byte_order_mark">byte order mark</a>).</p>

<h2><a id="user-content-examples" class="anchor" href="#examples" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Examples</h2>

<h3><a id="user-content-saving-text" class="anchor" href="#saving-text" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Saving text</h3>

<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> blob <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Blob</span>([<span class="pl-s"><span class="pl-pds">"</span>Hello, world!<span class="pl-pds">"</span></span>], {type<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>text/plain;charset=utf-8<span class="pl-pds">"</span></span>});
<span class="pl-en">saveAs</span>(blob, <span class="pl-s"><span class="pl-pds">"</span>hello world.txt<span class="pl-pds">"</span></span>);</pre></div>

<p>The standard W3C File API <a href="https://developer.mozilla.org/en-US/docs/DOM/Blob"><code>Blob</code></a> interface is not available in all browsers.
<a href="https://github.com/eligrey/Blob.js">Blob.js</a> is a cross-browser <code>Blob</code> implementation that solves this.</p>

<h3><a id="user-content-saving-a-canvas" class="anchor" href="#saving-a-canvas" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Saving a canvas</h3>

<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> canvas <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">getElementById</span>(<span class="pl-s"><span class="pl-pds">"</span>my-canvas<span class="pl-pds">"</span></span>), ctx <span class="pl-k">=</span> <span class="pl-smi">canvas</span>.<span class="pl-en">getContext</span>(<span class="pl-s"><span class="pl-pds">"</span>2d<span class="pl-pds">"</span></span>);
<span class="pl-c">// draw to canvas...</span>
<span class="pl-smi">canvas</span>.<span class="pl-en">toBlob</span>(<span class="pl-k">function</span>(<span class="pl-smi">blob</span>) {
    <span class="pl-en">saveAs</span>(blob, <span class="pl-s"><span class="pl-pds">"</span>pretty image.png<span class="pl-pds">"</span></span>);
});</pre></div>

<p>Note: The standard HTML5 <code>canvas.toBlob()</code> method is not available in all browsers.
<a href="https://github.com/eligrey/canvas-toBlob.js">canvas-toBlob.js</a> is a cross-browser <code>canvas.toBlob()</code> that polyfills this.</p>

<p><a href="https://camo.githubusercontent.com/e45db383ed87f57d340c88f92da60eb35a29cb04/68747470733a2f2f696e2e676574636c69636b792e636f6d2f3231323731326e732e676966" target="_blank"><img src="https://camo.githubusercontent.com/e45db383ed87f57d340c88f92da60eb35a29cb04/68747470733a2f2f696e2e676574636c69636b792e636f6d2f3231323731326e732e676966" alt="Tracking image" data-canonical-src="https://in.getclicky.com/212712ns.gif" style="max-width:100%;"></a></p>

<h2><a id="user-content-contributing" class="anchor" href="#contributing" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Contributing</h2>

<p>The <code>FileSaver.js</code> distribution file is compiled with Uglify.js like so:</p>

<div class="highlight highlight-source-shell"><pre>uglifyjs FileSaver.js --mangle --comments /@source/ <span class="pl-k">&gt;</span> FileSaver.min.js</pre></div>

<p>Please make sure you build a production version before submitting a pull request.</p>

<h2><a id="user-content-bower-installation" class="anchor" href="#bower-installation" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Bower Installation</h2>

<p>Please see the <a href="http://github.com/Teleborder/FileSaver.js">this repo</a> for a bower-compatible fork of FileSaver.js, available under the package name <code>file-saver.js</code>.</p>
</article>
  </div>


  </div>
  <div class="modal-backdrop"></div>
</div>


    </div>
  </div>

    </div>

        <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" role="img" title="GitHub " version="1.1" viewBox="0 0 16 16" width="24"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59 0.4 0.07 0.55-0.17 0.55-0.38 0-0.19-0.01-0.82-0.01-1.49-2.01 0.37-2.53-0.49-2.69-0.94-0.09-0.23-0.48-0.94-0.82-1.13-0.28-0.15-0.68-0.52-0.01-0.53 0.63-0.01 1.08 0.58 1.23 0.82 0.72 1.21 1.87 0.87 2.33 0.66 0.07-0.52 0.28-0.87 0.51-1.07-1.78-0.2-3.64-0.89-3.64-3.95 0-0.87 0.31-1.59 0.82-2.15-0.08-0.2-0.36-1.02 0.08-2.12 0 0 0.67-0.21 2.2 0.82 0.64-0.18 1.32-0.27 2-0.27 0.68 0 1.36 0.09 2 0.27 1.53-1.04 2.2-0.82 2.2-0.82 0.44 1.1 0.16 1.92 0.08 2.12 0.51 0.56 0.82 1.27 0.82 2.15 0 3.07-1.87 3.75-3.65 3.95 0.29 0.25 0.54 0.73 0.54 1.48 0 1.07-0.01 1.93-0.01 2.2 0 0.21 0.15 0.46 0.55 0.38C13.71 14.53 16 11.53 16 8 16 3.58 12.42 0 8 0z"></path></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2016 <span title="0.11304s from github-fe138-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    
    

    <div id="ajax-error-message" class="ajax-error-message flash flash-error">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15.72 12.5l-6.85-11.98C8.69 0.21 8.36 0.02 8 0.02s-0.69 0.19-0.87 0.5l-6.85 11.98c-0.18 0.31-0.18 0.69 0 1C0.47 13.81 0.8 14 1.15 14h13.7c0.36 0 0.69-0.19 0.86-0.5S15.89 12.81 15.72 12.5zM9 12H7V10h2V12zM9 9H7V5h2V9z"></path></svg>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <svg aria-hidden="true" class="octicon octicon-x" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      
      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-d7233eaabb7531aaf275fa71e7bca3c43cb11eae12c8359622bd13d725320aee.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-f2186be20dc42f800f5005ebd4e64f4619aef00e8442281e3eab03ebb5a7a5ea.js"></script>
      
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15.72 12.5l-6.85-11.98C8.69 0.21 8.36 0.02 8 0.02s-0.69 0.19-0.87 0.5l-6.85 11.98c-0.18 0.31-0.18 0.69 0 1C0.47 13.81 0.8 14 1.15 14h13.7c0.36 0 0.69-0.19 0.86-0.5S15.89 12.81 15.72 12.5zM9 12H7V10h2V12zM9 9H7V5h2V9z"></path></svg>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
    <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
    </button>
  </div>
</div>

  </body>
</html>

