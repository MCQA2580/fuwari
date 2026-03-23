// 模拟访问量统计
export async function get() {
  try {
    // 由于是静态网站，我们返回一个固定值
    // 实际项目中，可以使用数据库或第三方服务来统计真实访问量
    const views = 548623;
    
    return {
      body: JSON.stringify({
        views
      })
    };
  } catch (error) {
    return {
      status: 500,
      body: JSON.stringify({ error: 'Failed to get views' })
    };
  }
}
