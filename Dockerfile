FROM node:20-alpine

WORKDIR /app

# 拷贝源码（本项目零依赖，无需 npm install）
COPY . .

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["node", "server.js"]