import Header from "@/components/Header";
import _Carousel from "@/components/Carousel";
import Product from "@/components/Product";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Display from "@/components/Display";
import Bar from "@/components/Bar";
import Cards from "@/components/Cards";
import Layout from "@/components/layout";
import {
  UserOutlined,
  FileTextOutlined,
  CloudServerOutlined,
  AuditOutlined,
  UpCircleOutlined,
  ExclamationCircleOutlined,
  CoffeeOutlined,
  BugOutlined,
} from "@ant-design/icons";

export default function Products() {
  return (
    <>
      <div className="h-screen pt-20 bg-neutral-100 flex flex-col">
        <div className=" flex-grow flex flex-row">
          <section className="block flex-col h-full text-nowrap border-r w-48 border-gray-100 bg-white text-xl ">
            <div className=" border-b flex flex-row justify-center py-3 text-2xl">
              账号中心
            </div>
            <div className="py-3 px-6 hover:text-blue-500 hover:bg-blue-500/10  flex flex-row items-between justify-between hover:cursor-pointer ">
              <UserOutlined className="text-2xl mr-3" />
              个人中心
            </div>
            <div className="py-3 px-6 hover:text-blue-500 hover:bg-blue-500/10  flex flex-row items-between justify-between hover:cursor-pointer ">
              <FileTextOutlined className="text-2xl mr-3" />
              订单管理
            </div>
            <div className="py-3 px-6 hover:text-blue-500 hover:bg-blue-500/10  flex flex-row items-between justify-between hover:cursor-pointer ">
              <CloudServerOutlined className="text-2xl mr-3" />
              我的云服务
            </div>
            <div className="py-3 px-6 hover:text-blue-500 hover:bg-blue-500/10  flex flex-row items-between justify-between hover:cursor-pointer ">
              <AuditOutlined className="text-2xl mr-3" />
              实名认证
            </div>
            <div className="py-3 px-6 hover:text-blue-500 hover:bg-blue-500/10  flex flex-row items-between justify-between hover:cursor-pointer ">
              <UpCircleOutlined className="text-2xl mr-3" />
              回到首页
            </div>
          </section>
          <section className="flex-grow px-10 flex flex-col mb-10">
            <div className="  flex flex-row justify-start py-3 text-2xl">
              我的云服务
            </div>
            <div className="bg-white h-[400px] py-5 flex flex-row">
              <img src="/products1.png" className="h-full pl-10" alt="" />
              <div className="px-10 flex-grow flex flex-col justify-between  items-center py-10">
                <div className="flex flex-col justify-between  items-center">
                  <p className="text-nowrap text-2xl pb-5">
                    灵眸智云云服务中心：一站式云服务体验
                  </p>
                  <p className="w-full text-xl">
                    灵眸智云云服务中心致力于为企业提供全面、高效、安全的云服务解决方案。我们凭借先进的技术和专业的团队，助力企业实现数字化转型和升级，释放无限商业潜力。通过一站式服务，我们满足企业在云资源管理、数据安全保障、应用部署与迁移等方面的需求，并提供定制化的解决方案。灵眸智云云服务中心让您轻松驾驭云端，共创美好未来。
                  </p>
                </div>

                <div className="flex h-10 w-full flex-row items-center justify-around py-3">
                  <div className="hover:scale-110 transition-all text-blue-500 text-xl flex flex-row items-center cursor-pointer">
                    <ExclamationCircleOutlined className="text-4xl px-2" />
                    产品介绍
                  </div>
                  <div className="hover:scale-110 transition-all text-blue-500 text-xl flex flex-row items-center cursor-pointer">
                    <CoffeeOutlined className="text-4xl px-2" />
                    产品介绍
                  </div>
                  <div className="hover:scale-110 transition-all text-blue-500 text-xl flex flex-row items-center cursor-pointer">
                    <FileTextOutlined className="text-4xl px-2" />
                    产品介绍
                  </div>
                </div>
              </div>
            </div>
            <div className="  flex flex-row justify-start py-3 text-2xl">
              已购产品
            </div>
            <div className="h-[400px] py-5 grid grid-cols-3 grid-rows-2 flex-grow  gap-16">
              <div className="bg-white flex justify-center items-center  text-2xl hover:scale-110  transition-all group cursor-pointer">
                <p className="group-hover:scale-125 transition-all">
                  + 新增产品
                </p>
              </div>
              <div className="bg-white flex flex-col items-center  text-2xl hover:scale-110  transition-all group cursor-pointer">
                <div className="py-10 px-10 h-[80%]  flex flex-row justify-between w-full border-b">
                  <div className="pr-10">
                    <div className=" rounded-full bg-black h-14 w-14 text-white flex justify-center items-center text-3xl text-bold">
                      <BugOutlined />
                    </div>
                  </div>
                  <div>
                    <p className="transition-all text-xl pb-8">
                      灵眸传感器模块集成平台
                    </p>
                    <p className="text-base font-light">
                      灵眸系列传感器，运行状态实时监控。组态化。
                    </p>
                  </div>
                </div>
                <div className=" justify-center flex h-[20%] items-center flex-row">
                  进入平台
                </div>
              </div>
              <div className="bg-white flex flex-col items-center  text-2xl hover:scale-110  transition-all group cursor-pointer">
                <div className="py-10 px-10 h-[80%]  flex flex-row justify-between w-full border-b">
                  <div className="pr-10">
                    <div className=" rounded-full bg-green-500 h-14 w-14 text-white flex justify-center items-center text-3xl text-bold">
                      <BugOutlined />
                    </div>
                  </div>
                  <div>
                    <p className="transition-all text-xl pb-8">
                      灵云云边端数据管理平台
                    </p>
                    <p className="text-base font-light">
                      数据管理、数据传输、可视化界面。
                    </p>
                  </div>
                </div>
                <div className=" justify-center flex h-[20%] items-center flex-row">
                  进入平台
                </div>
              </div>
              <div className="bg-white flex flex-col items-center  text-2xl hover:scale-110  transition-all group cursor-pointer">
                <div className="py-10 px-10 h-[80%] flex flex-row justify-between w-full border-b">
                  <div className="pr-10">
                    <div className=" rounded-full bg-yellow-500 h-14 w-14 text-white flex justify-center items-center text-3xl text-bold">
                      <BugOutlined />
                    </div>
                  </div>
                  <div>
                    <p className="transition-all text-xl pb-8">
                      灵智智能调度平台
                    </p>
                    <p className="text-base font-light">
                      根据设备的历史运行数据和实时生产需求，优化设备使用计划。该系统能够动态调整设备运行状态，提高设备的整体利用率。
                    </p>
                  </div>
                </div>
                <div className=" justify-center flex h-[20%] items-center flex-row">
                  进入平台
                </div>
              </div>
              <div className="bg-white flex flex-col items-center  text-2xl hover:scale-110  transition-all group cursor-pointer">
                <div className="py-10 px-10 h-[80%] flex flex-row justify-between w-full border-b">
                  <div className="pr-10">
                    <div className=" rounded-full bg-red-500 h-14 w-14 text-white flex justify-center items-center text-3xl text-bold">
                      <BugOutlined />
                    </div>
                  </div>
                  <div>
                    <p className="transition-all text-xl pb-8">
                      灵智健康管理平台
                    </p>
                    <p className="text-base font-light">
                      基于大数据和AI技术，系统能够全面了解设备的运行状态，预测设备的维护需求和潜在故障。
                    </p>
                  </div>
                </div>
                <div className=" justify-center flex h-[20%] items-center flex-row">
                  进入平台
                </div>
              </div>
              <div className="bg-white flex flex-col items-center  text-2xl hover:scale-110  transition-all group cursor-pointer">
                <div className="py-10 px-10 h-[80%] flex flex-row justify-between w-full border-b">
                  <div className="pr-10">
                    <div className=" rounded-full bg-violet-500 h-14 w-14 text-white flex justify-center items-center text-3xl text-bold">
                      <BugOutlined />
                    </div>
                  </div>
                  <div>
                    <p className="transition-all text-xl pb-8">
                    灵智隐私计算平台
                    </p>
                    <p className="text-base font-light">
                    为用户的工业智能化需求进行个性化计算设计。
                    </p>
                  </div>
                </div>
                <div className=" justify-center flex h-[20%] items-center flex-row">
                  进入平台
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
