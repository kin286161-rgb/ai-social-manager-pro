CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255),
  full_name VARCHAR(255),
  role VARCHAR(50) DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS social_accounts (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  provider VARCHAR(50) NOT NULL,
  provider_user_id VARCHAR(255) NOT NULL,
  access_token_encrypted TEXT,
  refresh_token_encrypted TEXT,
  expires_at TIMESTAMP WITH TIME ZONE,
  status VARCHAR(50) DEFAULT 'disconnected',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS facebook_pages (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  page_id VARCHAR(255) UNIQUE NOT NULL,
  page_name VARCHAR(255),
  page_username VARCHAR(255),
  avatar_url TEXT,
  access_token_encrypted TEXT,
  permissions JSONB,
  is_default BOOLEAN DEFAULT FALSE,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS tiktok_channels (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  channel_name VARCHAR(255),
  channel_id VARCHAR(255),
  handle VARCHAR(255),
  avatar_url TEXT,
  channel_link TEXT,
  source_type VARCHAR(50) DEFAULT 'manual',
  verification_status VARCHAR(50) DEFAULT 'unverified',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS source_videos (
  id UUID PRIMARY KEY,
  channel_id UUID REFERENCES tiktok_channels(id) ON DELETE CASCADE,
  video_id VARCHAR(255),
  title TEXT,
  post_date TIMESTAMP WITH TIME ZONE,
  duration_seconds INT,
  thumbnail_url TEXT,
  video_url TEXT,
  author_id VARCHAR(255),
  is_verified BOOLEAN DEFAULT FALSE,
  is_duplicate BOOLEAN DEFAULT FALSE,
  is_owner_content BOOLEAN DEFAULT FALSE,
  validity_status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS video_assets (
  id UUID PRIMARY KEY,
  source_video_id UUID REFERENCES source_videos(id) ON DELETE CASCADE,
  file_url TEXT,
  status VARCHAR(50) DEFAULT 'uploaded',
  original_watermark_detected BOOLEAN DEFAULT FALSE,
  resolved_watermark BOOLEAN DEFAULT FALSE,
  export_format VARCHAR(50) DEFAULT 'mp4',
  aspect_ratio VARCHAR(20) DEFAULT '9:16',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS video_edit_jobs (
  id UUID PRIMARY KEY,
  video_asset_id UUID REFERENCES video_assets(id) ON DELETE CASCADE,
  job_status VARCHAR(50) DEFAULT 'queued',
  style VARCHAR(50),
  subtitle_generated BOOLEAN DEFAULT FALSE,
  transcript TEXT,
  edited_file_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  finished_at TIMESTAMP WITH TIME ZONE
);

CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  image_url TEXT,
  price NUMERIC(12,2),
  description TEXT,
  purchase_link TEXT,
  affiliate_link TEXT,
  product_code VARCHAR(255),
  category VARCHAR(100),
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS affiliate_links (
  id UUID PRIMARY KEY,
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  affiliate_code VARCHAR(255),
  referral_url TEXT,
  is_visible BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS posts (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  page_id UUID REFERENCES facebook_pages(id) ON DELETE CASCADE,
  video_asset_id UUID REFERENCES video_assets(id),
  caption TEXT,
  hashtags TEXT,
  status VARCHAR(50) DEFAULT 'draft',
  scheduled_for TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  published_at TIMESTAMP WITH TIME ZONE
);

CREATE TABLE IF NOT EXISTS post_schedules (
  id UUID PRIMARY KEY,
  post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
  publish_time TIMESTAMP WITH TIME ZONE,
  recurrence VARCHAR(50),
  page_ids JSONB,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS publishing_logs (
  id UUID PRIMARY KEY,
  post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
  provider VARCHAR(50),
  provider_post_id VARCHAR(255),
  status VARCHAR(50),
  error_message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS ai_agents (
  id UUID PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(100),
  status VARCHAR(50) DEFAULT 'offline',
  config JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS agent_tasks (
  id UUID PRIMARY KEY,
  agent_id UUID REFERENCES ai_agents(id) ON DELETE CASCADE,
  task_name VARCHAR(255),
  task_payload JSONB,
  status VARCHAR(50) DEFAULT 'queued',
  result_summary TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  finished_at TIMESTAMP WITH TIME ZONE
);

CREATE TABLE IF NOT EXISTS analytics (
  id UUID PRIMARY KEY,
  post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
  views BIGINT DEFAULT 0,
  interactions BIGINT DEFAULT 0,
  click_count BIGINT DEFAULT 0,
  conversion_value NUMERIC(12,2) DEFAULT 0,
  collected_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS notifications (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  kind VARCHAR(100),
  title TEXT,
  message TEXT,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS system_settings (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  key VARCHAR(255) NOT NULL,
  value JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_facebook_pages_user_id ON facebook_pages(user_id);
CREATE INDEX idx_tiktok_channels_user_id ON tiktok_channels(user_id);
CREATE INDEX idx_source_videos_channel_id ON source_videos(channel_id);
CREATE INDEX idx_posts_status ON posts(status);
CREATE INDEX idx_agent_tasks_status ON agent_tasks(status);
