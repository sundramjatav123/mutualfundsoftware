import connectDB from "@/lib/mongodb";
import Faq from "@/models/Faq";
import SiteSetting from "@/models/SiteSetting";


const toPlain = (data) => {
  return JSON.parse(
    JSON.stringify(data)
  );

};


export async function getSiteData() {
  try {
    await connectDB();
    const data =
      await SiteSetting.findOne().lean();
    if (!data) {
      return toPlain({});
    }
    return toPlain(data);
  } catch (error) {
    console.log(error);
    return toPlain({});
  }
}

export async function getFQAsData() {
  try {
    await connectDB();
    const data =
      await Faq.find().lean();
    if (!data) {
      return toPlain({});
    }
    return toPlain(data);
  } catch (error) {
    console.log(error);
    return toPlain({});
  }
}