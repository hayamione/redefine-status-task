import React from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import content2 from "../assets/img/section-2.jpg";

const Home = () => {
  return (
    <Layout>
      <div className="home-page">
        {/* Banner Section */}
        <div className="banner-section py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="banner-text">
                  <h1 className="mb-0">Redefine Status</h1>
                  <p className="mb-0">
                    How We Can Correct{" "}
                    <strong>Mankind&rsquo;s Leaderboard</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Content Section 1 */}
        <div className="content-section-1 content py-5">
          <div className="container">
            <div className="section-title text-center">
              <h2>Overview of The Problem</h2>
            </div>
            <p>
              The fact that our designer goods do not represent wealth for
              positive utility is having more negative damage to society than we
              can fathom. This article is going to help detail why, and detail
              our solution in progress.
            </p>
            <p>
              As individuals, once we cover our basic needs, status becomes an
              intrinsic motivator in the rest of our actions. Status comes in
              many forms. The healthiest / most enlightened cultures put the
              highest status in rewarding positive sum behavior. In global
              culture, luxury goods like a Gucci bag/belt have become widespread
              as top status symbols, reflecting vapid use of money as the
              highest form of status. It has become such common Christmas list
              item for broke young teenagers that the{" "}
              <Link
                target="_blank"
                to="https://www.businesstoday.in/visualstories/technology/who-is-bernard-arnault-meet-worlds-richest-person-alive-who-once-again-beat-elon-musk-24896-03-03-2023"
              >
                richest man on the planet
              </Link>{" "}
              at the time of this writing got his riches from selling these
              overpriced goods representing nothing more than the ability to
              waste money. Collectively this misrepresentation of true status
              (service to others) is attributing more damage to building a
              healthy positive culture than we can imagine.
            </p>
            <p className="mb-0">
              Social media, our emergent global cultural production system,
              could be used collectively to unify humanity around bettering
              ourselves and others. Instead it is used to further extract youth
              through a false form of{" "}
              <Link
                target="_blank"
                to="https://www.eugenewei.com/blog/2019/2/19/status-as-a-service"
              >
                status as a service.
              </Link>{" "}
              Imagine a world where this wasteful spending was considered
              cancelable. One where we collectively take accountability for the
              capability to money to the positive growth of us as a species.
              Imagine a world where the designer things we wore showed off
              spending a lot of money to make a lot of positive impact. If the
              world you imagined only went as far as to redistribute the wealth
              of designer wear, try imagining the deeper cultural effects this
              new alignment would have.
            </p>
            <div className="quote">
              <p className="text-wh">
                <span className="fa fa-quote-left"></span> Over the past hundred
                years we have increase the global GDP sevenfold, yet wealth
                inequality continues to skyrocket and luxury spending grows
                rapidly. In order to change the failure of redistribution of
                wealth at scale, we must effectively influence culture and help
                redefine what “status” is in the modern age. This will
                ultimately change the flow of money in society as the new age of
                status being helping the world, becomes more prominent. We have
                failed at building a society which healthily distributes
                wealth/power. Given society is a collective project we are
                responsible for, we think this stems from the culture not
                supporting doing good as the highest form of status. We have
                more than enough resources, but many people without access to
                them, and a culture that motivates and glorifies overspending on
                vanity luxury goods.
                <span className="fa fa-quote-right"></span>
              </p>
              <p>
                <Link
                  to="https://jackjay.io/"
                  className="text-wh"
                  target="_blank"
                >
                  - Jack Jay
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="content-section-1 content py-5">
          <div className="container">
            <div className="section-title text-center">
              <h2>The Simple Solution</h2>
            </div>
            <p>
              <strong>
                Thought experiments make it obvious that this idea is memetic,
                and just has not been tried in the market. Once one initial
                company opens up this model, many more will follow and copy.
              </strong>
            </p>
            <p className="mb-4">
              For the same price as a Louie Vuitton bag, a permanent shelter can
              be built in Bangladesh for a family in need. This gives rise to
              the idea that anytime someone walks into a designer store and
              purchased an item, they are having to burn down a house (most
              making this decision unknowingly).
            </p>
            <p>
              Based on the principle “if a penny saved is a penny earned” we can
              extrapolate that to a Louie bag is a home burned. But just telling
              someone not to flex is not going to solve the problem. If we
              really want to win this war, we just need to sell higher status,
              for the same price.{" "}
            </p>
            <p>
              Imagine trying to connect with a luxury purse buyer as protestors
              outside of a designer store. Rather than simply protesting their
              spending on that good, we need to sell them a better version of
              what they are buying.
            </p>
            <div className="row">
              <div className="col-md-7">
                <p>
                  Protests outside of stores that sell meat where stands are set
                  up showing customers videos of the harmed animals may not be a
                  great way to connect with the target audience, and often cause
                  a greater divide in mindsets.
                </p>
                <p>
                  In this case volunteers or employees could stand outside of
                  luxury goods markets, sporting the aligned luxury merch. Rodeo
                  drive for example is a notorious spot where every designer
                  store not only has a shop, but theres a steady flow of
                  customers.
                </p>
                <p>
                  Social media accounts devoted to making content here are
                  already massively viral amassing hundreds of millions of views
                  interviewing buyers. Each successful conversion, would make
                  for a viral video and an ad set, bringing potentially
                  thousands of new customers while kickstarting educating the
                  world of the low status of wasteful spending now that a better
                  alternative exists.
                </p>
              </div>
              <div className="col-md-5 my-auto">
                <img
                  src={content2}
                  alt="section2 img"
                  className="img-responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
