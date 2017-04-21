# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170420234641) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "projects", force: :cascade do |t|
    t.integer  "user_id",                          null: false
    t.datetime "created_at",                       null: false
    t.datetime "updated_at",                       null: false
    t.string   "title",       default: "untitled"
    t.string   "image_url"
    t.text     "description"
    t.string   "location"
    t.integer  "goal"
    t.boolean  "launch",      default: false
    t.date     "launch_date"
    t.integer  "duration"
    t.string   "category",                         null: false
  end

  create_table "rewards", force: :cascade do |t|
    t.integer  "project_id",       null: false
    t.string   "title",            null: false
    t.integer  "pledge_amount",    null: false
    t.text     "description",      null: false
    t.date     "deliver_date",     null: false
    t.integer  "number_available"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  add_index "rewards", ["project_id"], name: "index_rewards_on_project_id", unique: true, using: :btree

  create_table "stories", force: :cascade do |t|
    t.integer  "project_id",           null: false
    t.string   "video_url",            null: false
    t.text     "description",          null: false
    t.text     "risks_and_challenges"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "stories", ["project_id"], name: "index_stories_on_project_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "name",            null: false
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token"
    t.string   "profile_image"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree

end
