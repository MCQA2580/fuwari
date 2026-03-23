import { getCollection } from 'astro:content';

// 统计文章数量和字数
export async function get() {
  try {
    const posts = await getCollection('posts');
    
    // 计算文章数量
    const articleCount = posts.length;
    
    // 计算总字数
    let totalWords = 0;
    for (const post of posts) {
      // 简单估算字数（实际应该解析Markdown内容）
      if (post.body) {
        totalWords += post.body.split(/\s+/).length;
      }
    }
    
    // 格式化字数
    let wordCount;
    if (totalWords >= 10000) {
      wordCount = (totalWords / 10000).toFixed(1) + 'w';
    } else if (totalWords >= 1000) {
      wordCount = (totalWords / 1000).toFixed(1) + 'k';
    } else {
      wordCount = totalWords.toString();
    }
    
    return {
      body: JSON.stringify({
        articleCount,
        wordCount
      })
    };
  } catch (error) {
    return {
      status: 500,
      body: JSON.stringify({ error: 'Failed to get stats' })
    };
  }
}
