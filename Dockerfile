# ベースイメージにdenoを使用
FROM denoland/deno:alpine-2.7.14

# アプリケーションディレクトリをコンテナにコピー
WORKDIR /app

# Copy source
COPY . .

# Install dependencies (use just `deno install` if deno.json has imports)
RUN deno install --entrypoint main.ts

EXPOSE 5173

# Run the app
CMD ["deno", "run", "vite" ]
