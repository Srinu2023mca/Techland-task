import React from "react";
import {
  Star,
  TrendingUp,
  Zap,
  Activity,
  ToyBrick,
  Package,
  AudioLines,
  Fingerprint,
  RotateCcw,
  ChartPie,
  Command,
} from "lucide-react";
const TestimonialsSection = () => {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              More than 25,000 teams use Collabs
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              <span className="text-2xl font-semibold flex items-center">
                <ToyBrick className="me-2" /> Unsplash
              </span>
              <span className="text-2xl font-semibold flex items-center">
                <Package className="me-2" /> Notion
              </span>
              <span className="text-2xl font-semibold flex items-center">
                <AudioLines className="me-2" /> INTERCOM
              </span>
              <span className="text-2xl font-semibold flex items-center">
                <Fingerprint className="me-2" /> descript
              </span>
              <span className="text-2xl font-semibold flex items-center">
                <RotateCcw className="me-2" /> grammarly
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                How we support our
                <br />
                partner all over the world
              </h3>
              <p className="text-gray-600 mb-8">
                SaaS become a common delivery model for many business
                application, including office software, messaging software,
                payroll processing software, DBMS software, management software
              </p>

              <div className="space-y-6 flex flex-row md-flex-col gap-8">
                <div className="flex flex-col  gap-4 ">
                  <div className="flex  text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <div>
                    <div className="font-semibold">4.9 / 5 rating</div>
                    <div className="text-sm text-gray-500">databricks</div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex text-yellow-500">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                    <Star className="w-5 h-5 text-gray-300" />
                  </div>
                  <div>
                    <div className="font-semibold">4.8 / 5 rating</div>
                    <div className="text-sm text-gray-500">Chainalysis</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 rounded-lg p-3">
                  <Activity className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Publishing</h4>
                  <p className="text-gray-600">
                    Plan, collaborate, and publishing your contetn that drivees
                    meaningful engagement and growth for your barnd
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 rounded-lg p-3">
                  <ChartPie className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Analytics</h4>
                  <p className="text-gray-600">
                    Analyze your performance and create goegeous report
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 rounded-lg p-3">
                  <Command className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Engagement</h4>
                  <p className="text-gray-600">
                    Quiuckly navigate you anda engage with your adiuence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;
