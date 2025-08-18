# Makefile for universo_caotico

# The directory that contains the Next.js project. Override when needed, e.g.:
#   make local PROJECT_DIR=/some/other/path
PROJECT_DIR ?= $(CURDIR)

.PHONY: local setup

setup:
	@echo "==> Creating .env file with placeholder values"
	@if [ ! -f $(PROJECT_DIR)/.env ]; then \
		echo "# Shopify Configuration (Required)" > $(PROJECT_DIR)/.env; \
		echo "SHOPIFY_STORE_DOMAIN=your-store.myshopify.com" >> $(PROJECT_DIR)/.env; \
		echo "SHOPIFY_STOREFRONT_ACCESS_TOKEN=shpat_your_access_token_here" >> $(PROJECT_DIR)/.env; \
		echo "" >> $(PROJECT_DIR)/.env; \
		echo "# Optional but recommended" >> $(PROJECT_DIR)/.env; \
		echo "SHOPIFY_REVALIDATION_SECRET=your_revalidation_secret_here" >> $(PROJECT_DIR)/.env; \
		echo "COMPANY_NAME=\"Your Company Name\"" >> $(PROJECT_DIR)/.env; \
		echo "SITE_NAME=\"Your Store Name\"" >> $(PROJECT_DIR)/.env; \
		echo "" >> $(PROJECT_DIR)/.env; \
		echo "# For local development - set to true to bypass Shopify checkout" >> $(PROJECT_DIR)/.env; \
		echo "MOCK_CHECKOUT=true" >> $(PROJECT_DIR)/.env; \
		echo "==> .env file created. Edit it with your actual Shopify credentials."; \
	else \
		echo "==> .env file already exists"; \
	fi

local: setup
	@echo "==> Installing dependencies in $(PROJECT_DIR)"
	cd $(PROJECT_DIR) && pnpm install
	@echo "==> Starting development server (Ctrl-C to stop)"
	cd $(PROJECT_DIR) && pnpm dev
