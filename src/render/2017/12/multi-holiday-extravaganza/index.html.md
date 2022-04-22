---
layout: post
episodeNumber: 175
title: Multi-Holiday Extravaganza
date: 2017-12-12
audioUrl: https://static.msdevshow.com/episodes/msdevshow_0175.mp3
--- 

### News

 - [Jason containerizes everything](http://ytechie.com/2017/11/moving-my-static-blog-to-docker/)
 - [Tesla announces amazing hardware](https://shop.tesla.com/us/en/product/apparel/powerbank.html)
 - [Language Server Protocol Preview Release](https://blogs.msdn.microsoft.com/visualstudio/2017/11/21/announcing-language-server-protocol-preview-release)
 - [The "Ranges" feature is planned for C# 7.3](https://twitter.com/andrey_akinshin/status/933223365086560256)
    - [Ranges feature on GitHub](https://github.com/dotnet/roslyn/blob/features/range/docs/features/range.md)
 - [SQL Injection attack registered Company](https://twitter.com/r00tl4b/status/933742501164335104)
    - [Company Registration](https://beta.companieshouse.gov.uk/company/10542519)
 - [Don't have Diversity training where you work? Use Microsoft's!](https://www.microsoft.com/en-us/diversity/training)
 - [Visual Studio 2017 Version 15.6 Preview](https://blogs.msdn.microsoft.com/visualstudio/2017/12/07/visual-studio-2017-version-15-6-preview/)
 - [Announcing Azure Migrate ](https://azure.microsoft.com/en-us/blog/launching-preview-of-azure-migrate/)
 - [Global Virtual Network Peering](https://azure.microsoft.com/en-us/roadmap/global-vnet-peering/)
 - [Azure DevOps Project – public preview](https://azure.microsoft.com/en-us/blog/azure-devops-project-public-preview/)
 - [Announcing SQL Operations Studio for preview](https://blogs.technet.microsoft.com/dataplatforminsider/2017/11/15/announcing-sql-operations-studio-for-preview/)
 - [AI School](https://aischool.microsoft.com/)
 - [Start developing Quantum Computing in Q\# with the Quantum Development Kit](https://blogs.microsoft.com/ai/?p=73792)

### What we're thankful for

 - Jason
    - Mavic
    - Hotspot & RV Tech
       - Booster
       - Wi-Fi antenna
 - Carl
    -   Wireless all the things!
        - Bluetooth - audio
        - Qi - Iphone
        - Communications
        - Internet
    -   Truck

### What we would put on our Christmas list

 - Jason
    - Gopro Hero 6 + gimbal
    - Xbox One X / Switch
    - Waze for carplay
 - Carl
    - [Ubiquiti Networking Gear](https://www.ubnt.com/)
    - Cheap Home IoT gear
       - Current batch of items too expensive
       - Outlets, [switches](https://www.amazon.com/Philips-Installation-Free-Exclusive-Compatible-Assistant/dp/B016AEHU70) $20-50 a pop? #CrayCra
       - [Philips hue mood light strips](https://www.amazon.com/dp/B0167H31CI/)
    - [Bluetooth Thermometer Probe](https://www.amazon.com/dp/B06VX8ZRW9/)
    - [Appartamento Espresso Machine](http://www.rocket-espresso.com/appartamento.html)
       - [Rocket-Espresso](http://www.rocket-espresso.com)
    - Laser Engraver
       - Engrave all the things!

### Azure Pick of the Week

 - [Azure subscription and service limits, quotas, and constraints](https://docs.microsoft.com/en-us/azure/azure-subscription-service-limits)

### The story of Bob Tipton

**Divide By Zero**

“Hi Chase, we’re glad you could make it on such short notice.  I’m Dr. Phillips, and I’ll be your main point of contact for the project.”

The speaker extended his hand with a smile, but Chase noticed there was a tightness in his expression that suggested he wasn’t as calm as his smile suggested.

“Pleased to meet you,” Chase responded, extending his own hand.  “I’m looking forward –“.

“We’d like to get started right away,” Phillips interrupted, “Time is of the essence, you see.  We went live yesterday with the new system, and things haven’t gone according to plan.  To be blunt, our necks are on the line, so we’re hoping you can start looking at the code right away.”

That was the extent of the formalities.  Chase was led to a PC resting on a lab table, its IDE open to the source code of the new system.  As Chase began unpacking his own laptop, a young man in a lab coat gently took it from him, smiling.

“If you don’t mind,” the young man said, “we’d like for you to look at the current code first.  I can get your laptop setup while you’re looking at the code.”

As Chase opened his mouth to object, Dr. Phillips placed a hand on Chase’s shoulder and made a sweeping gesture towards the already running PC, as if to invite him in.  “Please, Chase,” he said softly, with a slight tremor.

Shrugging, Chase swiveled in his chair and began clicking through the project structure, familiarizing himself with the landscape.  “Not as bad as I’d feared,” he thought, “whoever wrote this at least knew how to structure an application.”

“What exactly is the issue with the system?  The phone call was a bit vague,” Chase asked.

Dr. Phillips glanced at the younger scientist, then spoke in a measured tone. “We have a consistent and persistent error in our calculations, very small, but for this project those errors can be devastating.  It’s not just a single computation – nearly every calculation is affected, but not with all sets of test data.  A calculation might work perfectly with one set of data, then be in error at the fourth significant digit, then with another set of data, the error might be quite large.”

“What sort of calculations are being performed?” Chase asked.

“I’m afraid I can’t tell you that.” Dr. Phillips answered, “but what I can tell you is that precision is essential to the successful operation of the system. Even a slight miscalculation can have dire effects.”

Chase paused, thinking. What sort of project was this?  Everyone he’d met behaved as if they were constantly on the brink of getting fired.  Like working at a dot-com, turned up to eleven.  If these guys got canned, would he even get paid?

He was about to ask, when there was a loud knock at the opposite door.  Dr. Phillips looked startled at first, then opened the door a tiny amount and began a hushed conversation with someone on the other side.  Feeling ignored, Chase went back to reading code.  There were some crazy names for some of the functions and classes in this module.

As he read more of the code, Chase began to get a feel for what it was trying to do.  Some complicated engineering was happening, but nothing obvious jumped out at him as a possible source of intermittent miscalculations. 

Then he found it.  What was probably the worst bit of code in an otherwise well-written system he’d ever seen:
 
    private function DeviceSettings computePortalCloseSettings(double x, double y)
    {
              // Avoid divide by zero
              // TODO – Ask Dr. Phillips if this is ok
              If (x == 0.0d) x = 0.01d;
              If (y == 0.0d) y = 0.01d;
    }

Chase looked up and realized he was the only person left in the room.  He could hear machinery in operation somewhere outside the room.  Some sort of hammering that would stop for a few seconds, then start back up for a couple of seconds, over and over.  Occasionally, he’d hear a larger impact, suggesting that someone was frantically trying to beat some big piece of equipment into position.

He was about to start looking for someone who could cut a check when Dr. Phillips burst into the room and quickly slammed the door behind him.

“I think I’ve found it,” Chase began, but stopped when he noticed a red smear across Dr. Phillips’ lab coat.  Was that blood?

The hammering began again in earnest, but closer now, and more frequent.  Something made the hair on the back of Chase’s neck stand up.

“Dr. Phillips,” Chase began again, “I’ve found the issue.  The previous developer was forcing all inputs to be non-zero, just to avoid having to deal with the potential for any kind of divide by zero in the calculations.”

Phillips looked puzzled, then he smiled wryly as he understood the ramifications of what Chase had told him. 

“So no matter what the inputs, they’ll never be able to generate the settings necessary to close the portal…there’s no way it can happen.”

Phillips looked impossibly sad for a moment, then a grim smile formed on his face.  “Let’s get you paid, Chase.  We really appreciate your efforts.”

With that he opened the main door and strode into the hallway, not looking back to see if Chase had followed. 

Chase frantically packed his laptop away and tried to follow, but Dr. Phillips was nowhere to be seen.  As he looked up and down the hallway, he noticed that the hammering sounds had stopped.

At the end of the hall, he saw a figure in a white lab coat hurry across.

“Dr. Phillips?” Chase called, trotting towards the figure as he slung the laptop case across his shoulders.

There was no answer, and when Chase rounded the corner, he saw that the lights were out in this part of the building.  He heard a wet, slapping sound behind him.  As he turned to see what it was, he thought to himself, “This whole thing could have been avoided with some good unit tests.”