import connectDB from "@/lib/mongodb";
import Blog from "@/models/Blog";
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
      await Faq.find()
        .sort({
          createdAt: -1,
        })
        .lean();
    return Array.isArray(data)
      ? toPlain(data)
      : [];
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getBlogsData() {
  try {
    await connectDB();
    const data =
      await Blog.find()
        .sort({
          createdAt: -1,
        })
        .lean();
    return Array.isArray(data)
      ? toPlain(data)
      : [];
  } catch (error) {
    console.log(error);
    return [];
  }
}
export async function getBlogsSlugData(slug) {
  try {
    await connectDB();
    const data =
      await Blog.findOne({
        title: decodeURIComponent(slug),
      }).lean();
    return JSON.parse(
      JSON.stringify(data)
    );
  } catch (error) {

    console.log(error);

    return null;
  }
}