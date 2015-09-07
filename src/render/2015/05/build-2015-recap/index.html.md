---
layout: post
title: BUILD 2015 Recap
date: 2015-05-04
audioUrl: http://traffic.libsyn.com/msdevshow/msdevshow_0053.mp3
---

### News

### #Windows

 - [UAP -\> UWP Universal Windows Platform](http://blogs.windows.com/buildingapps/2015/04/29/distributing-windows-apps-to-the-world/)
  - [Deep Dive](http://blogs.windows.com/buildingapps/2015/04/30/a-deeper-dive-into-the-universal-windows-platform/)
  - [Need to Know: What is UWP?](https://www.thurrott.com/windows/windows-10/3294/need-to-know-universal-windows-platform)
  - [Live tiles, notifications and Action center](http://channel9.msdn.com/Events/Build/2015/2-762)
     -   XAML Tiles are being worked on
     -   Interactive tiles are being worked on
     -   JSON format being worked on
  - [Web of apps](http://channel9.msdn.com/Events/Build/2015/3-765)
  - Subscription based IAPs are coming to the new dev center and win10 apps
  - Carrier Billing across all Windows 10 devices
  - [One Dev Center](http://blogs.windows.com/buildingapps/2015/05/01/get-ready-for-the-unified-dev-center-dashboard-preview-and-upcoming-store-changes/)
     - Single submission flow for your Universal Windows Apps, as well as legacy Windows 8.x and Windows Phone 7.x/8.x apps
     - Single dashboard to analyze and manage app performance across all you apps
     -   Ability to distribute your apps to consumers who use Windows Store, as well as in a storefront specifically built for businesses and organizations, all via a single app submission
     - Management of your ads-in-apps from within Dev Center
     - And when the toolkits are available later this year, you will be able to submit and manage apps and games created with any of the [Universal Windows Platform Bridges](http://dev.windows.com/uwp-bridges/), a combination of developer tooling and runtime technologies that enables existing code to run in a way appropriate to the Windows platform including:
     - Classic Windows apps – bridge for traditional desktop applications
    and PC games into the Windows Store, making it easier to distribute
    and monetize PC games and applications that use .NET and Win32
     - Web apps – new ways for web sites to get discovered as apps in the
    Store, engaged by using notifications, and new ways to monetize
    using Windows Store payment options. Discussed at [Mobile World
    Congress](http://blogs.windows.com/buildingapps/2015/03/02/a-first-look-at-the-windows-10-universal-app-platform/)
     - For today’s app developer, we gave an early peek at [Android](https://dev.windows.com/en-US/uwp-bridges/project-astoria)subsystem and [IOS](https://dev.windows.com/en-US/uwp-bridges/project-islandwood) toolkits that make it easy for developers to extend their reach using their existing code, be it C++, Java, OpenGL, or Objective C
  - [Universal App Samples on GitHub have been updated](https://github.com/Microsoft/Windows-universal-samples)
  - [Initial Design Guidance](http://blogs.windows.com/bloggingwindows/2015/04/29/windows-10-design-getting-the-balance-right/)
  - [Bridges](http://blogs.msdn.com/b/stevengu/archive/2015/04/30/building-bridges-that-empower-developers.aspx)
     - [More UWP Bridges](https://dev.windows.com/en-US/uwp-bridges)
     - [Use your Android Code on Windows as UWP](http://channel9.msdn.com/Events/Build/2015/2-702) - Project Astoria
     - [Use your iOS Code on Windows as UWP](http://channel9.msdn.com/Blogs/OneCode/How-to-Port-iOS-apps-to-Windows-Store-apps) - Project Islandwood
     - [Use your .Net and Win32 code on Windows as UWP](http://channel9.msdn.com/Events/Build/2015/2-692) - Project Centennial
     - Use your web code on Windows as UWP - Project Westminster
  - [Hololens](http://channel9.msdn.com/Events/Build/2015/C9-08)
  - [Continuum](http://channel9.msdn.com/Events/Build/2015/2-703)
   - Run the tablet version of phone apps with a connected display
     -   Works over HDMI or Miracast
  - [Windows 10 preview for IoT is available](http://channel9.msdn.com/Events/Build/2015/2-724)
  -   [Works on Minnowboard Max or Raspberry Pi 2](http://blogs.windows.com/buildingapps/2015/04/29/microsoft-brings-windows-10-to-makers/)
  -   [Get started here](http://ms-iot.github.io/content/GetStarted.htm)
  - [Windows 10 "Arduino Certified" components](http://www.zdnet.com/article/windows-10-gets-arduino-certified-with-new-two-open-source-libraries/)

### #Azure

 - SDK 2.6
 - Data lake service
  -   HDFS compatible file system
  -   Unlimited storage
  -   Optimized for high throughput, low latency
 - [Project Oxford](http://channel9.msdn.com/Events/Build/2015/2-613)
  -   Face detection
  -   Speech recognition
  -   Vision information API
 - [Service Fabric](http://channel9.msdn.com/Events/Build/2015?sort=sequential&direction=desc&term=service+fabric)
 - SQL Database
  -   SQL DB Transparent data encryption public preview
  -   SQL DB Service Tier Advisor public preview - asses performance needs
  -   Elastic Data Pool
  -   Full-text Search
 - More than 500 new features in Azure in the past year
 - Over 50 trillion storage objects

### #Visual Studio

 - [Visual Studio Code](http://channel9.msdn.com/Events/Build/2015/3-680)
 - [Free, cross-platform editor](https://www.visualstudio.com/products/code-vs.aspx)
  - [Scott Hanselman review](http://www.hanselman.com/blog/IntroducingVisualStudioCodeForWindowsMacAndLinux.aspx)
  - [RC available](https://www.visualstudio.com/products/visual-studio-2015-downloads-vs)
 - Visual Studio 2013 Update 5 RC
 - TypeScript 1.5 Beta
 - [TypeScript 1.6 Async/Await](http://channel9.msdn.com/Events/Build/2015/3-644) 
 - Extensibility model for VSO
 - [GitHub Inside Your Visual Studio](http://haacked.com/archive/2015/04/30/github-in-your-visual-studio/) 

### #Misc

 - [Project Spartan is now
Edge](http://channel9.msdn.com/Events/Build/2015/2-656)
  - [Need to Know: Edge](https://www.thurrott.com/windows/windows-10/3280/need-to-know-microsoft-edge)
  - Extension support nearly compatible with Chrome
 - [.NET support on Linux in Docker](http://channel9.msdn.com/Events/Build/2015/2-683)
 - [.NET core preview for Linux and Mac](http://channel9.msdn.com/Events/Build/2015/3-670)
 - Additionally, run and debug .NET on Linux, in a Docker container
 - .NET 4.6 RC for Windows
 - Nano server
  - Admin GUIs on servers are poison
  - It's just a deployment option
  - Features are pulled in separately, not on disk
  - Hyper-V, aspnet, clustering support
  - Configuration via core PowerShell and WMI
  - Uses core Clr, most core engine components
  - Nano server is a subset of the full server surface area
  - An app that works on nano server will run on the full server
  - Optional Reverse forwarders package allows you run non-nano apps and silently fail on unsupported api calls
  - Lots of things can run with the reverse forwarders like Java, node.js
  - Less than 3 minutes to install
  - 400mb vs 5+gb for full server
  - Inject drivers in image before install
 - Office has a unified endpoint for all API calls
  - Add-ins run everywhere that office does
 - [Pre-recorded Sessions](http://channel9.msdn.com/Events/Build/2015?sort=sequential&direction=desc&term=&y=Pre-recorded)

### Apps of the Week

 - BUILD 2015 app
  - Easily navigate sessions and get web links to the sessions you want to watch video.
  - [Windows Phone](https://www.windowsphone.com/s?appid=efc8a22a-f132-4c58-b033-2223d2862e29)
  - [iOS](https://itunes.apple.com/us/app/microsoft-build-2015/id986169614?mt=8)
  - [Android](https://play.google.com/store/apps/details?id=com.microsoft.build)
 - [Kliva](http://www.windowsphone.com/s?appid=ffc42ff1-52ec-4219-899b-1ee4e5fe585b)
  - [Featured at a //BUILD/ Session](https://channel9.msdn.com/Events/Build/2015/2-679)
  - From the creators of a previous app of the week [Concert Wall](http://www.windowsphone.com/s?appid=6337ad32-2d69-4f26-bd98-44f6eaae7708)
     - Deani - [@deanihansen](https://twitter.com/deanihansen)
     - Glenn - [@depechie](https://twitter.com/depechie)
