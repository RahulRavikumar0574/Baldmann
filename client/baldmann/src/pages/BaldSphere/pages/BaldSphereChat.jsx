import React, { useState, useEffect, useRef } from "react";
import { Canvas } from '@react-three/fiber';
import BrainModel from '../components/BrainModel';

// Mock brain data for demonstration
const brainData = [
  {keyword:"run", region: ["Frontal","Parietal"]},
    {keyword:"sing", region: ["Frontal","Temporal"]},
    {keyword:"cry", region: ["Frontal","Temporal"]},
    {keyword:"drive", region: ["Frontal","Occipital","Parietal"]},
    {keyword:"cook", region: ["Frontal","Occipital","Parietal"]},
    {keyword:"swim", region: ["Frontal","Parietal"]},
    {keyword:"dance", region: ["Frontal","Temporal"]},
    {keyword:"laugh", region: ["Frontal","Temporal"]},
    {keyword:"think", region: ["Frontal"]},
    {keyword:"sneeze", region: ["Frontal","Parietal"]},
    {keyword:"throw", region: ["Frontal","Parietal"]},
    {keyword:"talk", region: ["Frontal","Temporal"]},
    {keyword:"write", region: ["Frontal","Occipital","Parietal"]},
    {keyword:"stand", region: ["Frontal","Parietal"]},
    {keyword:"smile", region: ["Frontal","Temporal"]},
    {keyword:"write", region: ["Frontal","Occipital","Parietal"]},
    {keyword:"smile", region: ["Frontal","Temporal","Central"]},
    {keyword:"sleep", region: ["Occipital"]},
    {keyword:"eat", region: ["Frontal","Temporal","Parietal"]},
    {keyword:"scream", region: ["Frontal","Temporal"]},
    {keyword:"smell", region: ["Temporal"]},
    {keyword:"insult", region: ["Frontal","Temporal","Parietal"]},
    {keyword:"cough", region: ["Frontal","Temporal","Parietal"]},
    {keyword:"joke", region: ["Frontal","Temporal","Central"]},
    {keyword:"hug", region: ["Frontal","Occipital","Central"]},
    {keyword:"fight", region: ["Frontal","Temporal","Central"]},
    {keyword:"dream", region: ["Temporal"]},
    {keyword:"paint", region: ["Frontal","Central"]},
    {keyword:"watch", region: ["Occipital","Parietal"]},
    {keyword:"play", region: ["Frontal","Parietal"]},
    {keyword:"help", region: ["Frontal","Temporal"]},
    {keyword:"teach", region: ["Frontal","Temporal"]},
    {keyword:"build", region: ["Frontal","Parietal"]},
    {keyword:"clean", region: ["Frontal","Occipital","Parietal"]},
    {keyword:"climb", region: ["Frontal","Parietal"]},
    {keyword:"sit", region: ["Frontal","Parietal"]},
    {keyword:"kiss", region: ["Frontal","Temporal"]},
    {keyword:"hold", region: ["Frontal","Parietal"]},
    {keyword:"push", region: ["Frontal","Parietal"]},
    {keyword:"pull", region: ["Frontal","Parietal"]},
    {keyword:"turn", region: ["Frontal","Parietal"]},
    {keyword:"kick", region: ["Frontal","Parietal"]},
    {keyword:"hit", region: ["Frontal","Parietal"]},
    {keyword:"grab", region: ["Frontal","Occipital","Parietal"]},
    {keyword:"strech", region: ["Frontal","Parietal"]},
    {keyword:"jog", region: ["Frontal","Parietal"]},
    {keyword:"whistle", region: ["Frontal","Temporal","Parietal"]},
    {keyword:"yawn", region: ["Frontal"]},
    {keyword:"blink", region: ["Frontal","Occipital"]},
    {keyword:"chew", region: ["Frontal","Parietal"]},
    {keyword:"frown", region: ["Frontal","Temporal"]},
    {keyword:"hop", region: ["Frontal","Parietal"]},
    {keyword:"scratch", region: ["Frontal","Parietal"]},
    {keyword:"shiver", region: ["Frontal"]},
    {keyword:"clap", region: ["Frontal","Parietal"]},
    {keyword:"doodle", region: ["Frontal","Occipital"]},
    {keyword:"juggle", region: ["Frontal","Occipital","Parietal"]},
    {keyword:"stomp", region: ["Frontal","Parietal"]},
    {keyword:"wiggle", region: ["Frontal","Parietal"]},
    {keyword:"twist", region: ["Frontal","Parietal"]},
    {keyword:"squeeze", region: ["Frontal","Parietal"]},
    {keyword:"slide", region: ["Frontal","Parietal"]},
    {keyword:"leap", region: ["Frontal","Parietal"]},
    {keyword:"bounce", region: ["Frontal","Parietal"]},
    {keyword:"twitch", region: ["Frontal","Parietal"]},
    {keyword:"roll", region: ["Frontal","Parietal"]},
    {keyword:"crawl", region: ["Frontal","Parietal"]},
    {keyword:"snap", region: ["Frontal","Parietal"]},
    {keyword:"whisper", region: ["Frontal","Temporal"]},
    {keyword:"stare", region: ["Frontal","Occipital"]},
    {keyword:"skip(skipping)", region: ["Frontal","Parietal"]},
    {keyword:"spin", region: ["Frontal","Parietal"]},
    {keyword:"drink", region: ["Frontal","Temporal","Parietal"]},
    {keyword:"swallow", region: ["Frontal","Parietal"]},
    {keyword:"gulp", region: ["Frontal","Parietal"]},
    {keyword:"point", region: ["Frontal","Occipital","Parietal"]},
    {keyword:"giggle", region: ["Frontal","Temporal"]},
    {keyword:"squeal", region: ["Frontal","Temporal"]},
    {keyword:"nod", region: ["Frontal","Parietal"]},
    {keyword:"sigh", region: ["Frontal","Temporal"]},
    {keyword:"stumble", region: ["Frontal","Parietal"]},
    {keyword:"groan", region: ["Frontal","Temporal"]},
    {keyword:"wink", region: ["Frontal","Temporal","Parietal"]},
    {keyword:"shudder", region: ["Frontal","Temporal"]},
    {keyword:"shout", region: ["Frontal","Temporal"]},
    {keyword:"sniff", region: ["Frontal","Temporal","Parietal"]},
    {keyword:"smirk", region: ["Frontal","Temporal"]},
    {keyword:"shove", region: ["Frontal","Parietal"]},
    {keyword:"snatch", region: ["Frontal","Parietal"]},
    {keyword:"flinch", region: ["Frontal","Parietal"]},
    {keyword:"whimper", region: ["Frontal","Temporal"]},
    {keyword:"rummage", region: ["Frontal","Temporal","Parietal"]},
    {keyword:"wail", region: ["Frontal","Temporal"]},
    {keyword:"blurt", region: ["Frontal","Temporal"]},
    {keyword:"jump", region: ["Frontal"]},
    {keyword:"comb", region: ["Frontal","Parietal","Central"]},
    {keyword:"brush", region: ["Frontal","Parietal"]},
    {keyword:"sew", region: ["Frontal","Parietal"]},
    {keyword:"text", region: ["Frontal","Parietal"]},
    {keyword:"hit", region: ["Frontal","Occipital","Parietal"]},
    {keyword:"photograph", region: ["Frontal"]},
    {keyword:"wash dishes", region: ["Frontal","Occipital","Parietal"]},
    {keyword:"iron clothes", region: ["Frontal","Occipital","Parietal"]},
    {keyword:"cartwheel", region: ["Frontal","Temporal","Occipital","Parietal"]},
    {keyword:"cycling", region: ["Frontal","Temporal","Occipital","Parietal"]},
    {keyword:"cooking", region: ["Frontal","Temporal","Occipital","Parietal"]},
    {keyword:"pedalling", region: ["Frontal"]},
    {keyword:"take a shower", region: ["Frontal","Parietal"]},
    {keyword:"meditate", region: ["Frontal","Parietal"]},
    {keyword:"hike", region: ["Occipital","Parietal"]},
    {keyword:"argue", region: ["Frontal","Temporal","Parietal"]},
    {keyword:"debate", region: ["Frontal","Temporal","Parietal"]},
    {keyword:"tying(laces)", region: ["Frontal","Occipital","Parietal"]},
    {keyword:"solve", region: ["Frontal","Temporal","Parietal"]},
    {keyword:"box(ing)", region: ["Frontal","Occipital"]},
    {keyword:"procrastinate", region: ["Frontal","Parietal"]},
    {keyword:"fall", region: ["Occipital","Parietal"]},
    {keyword:"shop", region: ["Frontal","Temporal","Parietal"]},
    {keyword:"bake", region: ["Frontal","Temporal","Parietal"]},
    {keyword:"gossip", region: ["Frontal","Temporal"]},
    {keyword:"shower", region: ["Frontal","Temporal","Parietal"]},
    {keyword:"ski", region: ["Frontal","Occipital","Parietal"]},
    {keyword:"knead", region: ["Frontal","Temporal","Parietal"]},
    {keyword:"fish(ing)", region: ["Occipital","Parietal"]},
    {keyword:"lift(ing)", region: ["Frontal","Parietal"]},
    {keyword:"exercising", region: ["Frontal","Parietal"]},
    {keyword:"snowboarding", region: ["Frontal","Occipital"]},
    {keyword:"flirt", region: ["Frontal","Temporal"]},
    {keyword:"bungee jumping", region: ["Occipital","Parietal"]},
    {keyword:"skydiving", region: ["Occipital","Parietal"]},
    {keyword:"travel", region: ["Frontal","Temporal","Parietal"]},
    {keyword:"camping", region: ["Frontal","Occipital","Parietal"]},
    {keyword:"fainting", region: ["Frontal","Parietal"]},
    {keyword:"napping", region: ["Frontal","Temporal"]},
    {keyword:"playing chess", region: ["Frontal","Temporal","Occipital","Parietal"]},
    {keyword:"playing football", region: ["Frontal","Temporal","Occipital","Parietal"]},
    {keyword:"weightlifting", region: ["Frontal","Parietal"]},
    {keyword:"playing basketball", region: ["Frontal","Temporal","Occipital","Parietal"]},
    {keyword:"archery", region: ["Frontal","Temporal","Occipital","Parietal"]},
    {keyword:"kickboxing", region: ["Frontal","Temporal","Occipital","Parietal"]},
    {keyword:"doing karate", region: ["Frontal","Temporal","Occipital","Parietal"]},
    {keyword:"singing karaoke", region: ["Frontal","Temporal"]},
    {keyword:"surfing", region: ["Frontal","Temporal","Occipital","Parietal"]},
    {keyword:"playing volleyball", region: ["Frontal","Temporal","Occipital","Parietal"]},
    {keyword:"playing rugby", region: ["Frontal","Temporal","Occipital","Parietal"]},
    {keyword:"playing cricket", region: ["Frontal","Temporal","Occipital","Parietal"]},
    {keyword:"playing tennis", region: ["Frontal","Temporal","Occipital","Parietal"]},
    {keyword:"ice skating", region: ["Frontal","Temporal","Occipital","Parietal"]},
    {keyword:"knitting", region: ["Frontal","Occipital","Parietal"]},
    {keyword:"playing badminton", region: ["Frontal","Temporal","Occipital","Parietal"]},
    {keyword:"shoveling", region: ["Frontal","Occipital","Parietal"]},
    {keyword:"yelling", region: ["Frontal","Temporal"]},
    {keyword:"shooting a gun", region: ["Frontal","Occipital","Parietal"]},
    {keyword:"feeding fish", region: ["Frontal","Parietal"]},
    {keyword:"sipping a straw", region: ["Frontal","Temporal","Occipital"]},
    {keyword:"sipping", region: ["Frontal","Parietal"]},
    {keyword:"smoking", region: ["Frontal","Temporal","Parietal"]},
    {keyword:"vaping", region: ["Frontal","Temporal","Parietal"]},
    {keyword:"skiing", region: ["Frontal","Temporal","Occipital","Parietal"]},
    {keyword:"ice hockey", region: ["Frontal","Temporal","Occipital","Parietal"]},
    {keyword:"shooting", region: ["Frontal","Temporal","Occipital","Parietal"]},
    {keyword:"horse riding", region: ["Frontal","Temporal","Occipital","Parietal"]},
    {keyword:"snowboarding", region: ["Frontal","Temporal","Occipital","Parietal"]},
    {keyword:"figure skating", region: ["Frontal","Temporal","Occipital","Parietal"]},
    {keyword:"javelin throw", region: ["Frontal","Temporal","Occipital","Parietal"]},
    {keyword:"diving", region: ["Frontal","Temporal","Occipital","Parietal"]},
    {keyword:"rowing", region: ["Frontal","Temporal","Occipital","Parietal"]},
    {keyword:"kayaking", region: ["Frontal","Temporal","Occipital","Parietal"]},
    {keyword:"rock climbing", region: ["Frontal","Temporal","Occipital","Parietal"]},
    {keyword:"sailing", region: ["Frontal","Temporal","Occipital","Parietal"]},
    {keyword:"taekwondo", region: ["Frontal","Temporal","Occipital","Parietal"]},
    {keyword:"car racing", region: ["Frontal","Temporal","Occipital","Parietal"]},
    {keyword:"hiking", region: ["Frontal","Temporal","Occipital","Parietal"]},
    {keyword:"mountaineering", region: ["Frontal","Temporal","Occipital","Parietal"]},
    {keyword:"playing pickleball", region: ["Frontal","Temporal","Occipital","Parietal"]},
    {keyword:"watering plants", region: ["Frontal","Temporal","Occipital","Parietal"]},
    {keyword:"learning a language", region: ["Frontal","Temporal","Occipital","Parietal"]},
    {keyword:"make bed", region: ["Frontal","Temporal","Occipital","Parietal"]},
    {keyword:"taking out trash", region: ["Frontal","Temporal","Occipital","Parietal"]},
    {keyword:"reading", region: ["Frontal","Temporal","Occipital","Parietal"]},
    {keyword:"chisel", region: ["Frontal"]},
    {keyword:"sculpt", region: ["Frontal","Parietal"]},
    {keyword:"glide", region: ["Frontal","Occipital","Central"]},
    {keyword:"skim(to remove something from the surface of a liquid)", region: ["Frontal"]},
    {keyword:"dive", region: ["Frontal","Occipital","Central"]},
    {keyword:"pry", region: ["Frontal","Occipital","Central"]},
    {keyword:"flatten", region: ["Frontal","Occipital","Central"]},
    {keyword:"trim", region: ["Frontal","Occipital","Central"]},
    {keyword:"dunk", region: ["Frontal","Occipital","Central"]},
    {keyword:"flick", region: ["Frontal","Temporal","Central"]},
    {keyword:"pound", region: ["Frontal","Occipital","Central"]},
    {keyword:"chase", region: ["Frontal","Occipital","Parietal"]},
    {keyword:"tackle", region: ["Frontal","Occipital","Central"]},
    {keyword:"grate", region: ["Frontal","Occipital"]},
    {keyword:"layer", region: ["Frontal"]},
    {keyword:"blend", region: ["Frontal","Occipital","Central"]},
    {keyword:"roast", region: ["Frontal","Occipital"]},
    {keyword:"pour", region: ["Frontal","Occipital","Parietal"]},
    {keyword:"spill", region: ["Frontal","Occipital"]},
    {keyword:"crack", region: ["Frontal","Occipital"]},
    {keyword:"grip", region: ["Frontal","Temporal","Occipital"]},
    {keyword:"shuffle", region: ["Frontal","Parietal"]},
    {keyword:"hook", region: ["Frontal","Occipital"]},
    {keyword:"tilt", region: ["Frontal","Occipital"]},
    {keyword:"drill", region: ["Frontal","Occipital","Parietal"]},
    {keyword:"trace", region: ["Frontal","Occipital"]},
    {keyword:"swipe", region: ["Frontal","Occipital"]},
    {keyword:"shine", region: ["Frontal","Temporal","Occipital"]},
    {keyword:"pinch", region: ["Frontal","Occipital","Parietal"]},
    {keyword:"float", region: ["Frontal","Parietal","Central"]},
    {keyword:"mash", region: ["Frontal"]},
    {keyword:"kneel", region: ["Frontal","Central"]},
    {keyword:"toilet", region: ["Frontal","Parietal"]},
    {keyword:"sink", region: ["Frontal","Parietal"]},
    {keyword:"mirror", region: ["Frontal","Occipital"]},
    {keyword:"towel", region: ["Frontal","Parietal"]},
    {keyword:"soap", region: ["Frontal","Parietal"]},
    {keyword:"bathtub", region: ["Frontal","Occipital","Parietal"]},
    {keyword:"toothbrush", region: ["Frontal","Parietal"]},
    {keyword:"shave", region: ["Frontal","Occipital","Parietal"]},
    {keyword:"faucet", region: ["Frontal","Parietal"]},
    {keyword:"bed", region: ["Frontal","Parietal"]},
    {keyword:"pillow", region: ["Frontal","Occipital"]},
    {keyword:"blanket", region: ["Frontal","Parietal"]},
    {keyword:"nightstand", region: ["Frontal","Parietal"]},
    {keyword:"closet", region: ["Frontal"]},
    {keyword:"lamp", region: ["Frontal","Occipital","Parietal"]},
    {keyword:"dresser", region: ["Frontal"]},
    {keyword:"curtains", region: ["Frontal","Occipital","Parietal"]},
    {keyword:"mattress", region: ["Frontal","Parietal"]},
    {keyword:"alarm clock", region: ["Frontal","Temporal"]},
    {keyword:"comforter", region: ["Frontal","Parietal"]},
    {keyword:"wardrobe", region: ["Frontal"]},
    {keyword:"shampoo", region: ["Frontal","Parietal"]},
    {keyword:"conditioner", region: ["Frontal","Parietal"]},
    {keyword:"face wash", region: ["Frontal","Parietal"]},
    {keyword:"plunger", region: ["Parietal"]},
    {keyword:"loofah", region: ["Frontal","Parietal"]},
    {keyword:"toilet paper", region: ["Frontal","Parietal"]},
    {keyword:"loyalty", region: ["Frontal","Temporal"]},
    {keyword:"affection", region: ["Frontal","Temporal"]},
    {keyword:"bonding", region: ["Frontal","Temporal"]},
    {keyword:"connection", region: ["Frontal","Temporal"]},
    {keyword:"empathy", region: ["Frontal","Temporal"]},
    {keyword:"camaraderie", region: ["Frontal","Temporal"]},
    {keyword:"hangout", region: ["Frontal","Temporal"]},
    {keyword:"encouragement", region: ["Frontal","Temporal"]},
    {keyword:"comfort", region: ["Frontal","Temporal"]},
    {keyword:"communication", region: ["Frontal","Temporal"]},
    {keyword:"trust", region: ["Frontal","Temporal"]},
    {keyword:"companionship", region: ["Frontal","Temporal"]},
    {keyword:"intimacy", region: ["Frontal","Temporal"]},
    {keyword:"support", region: ["Frontal","Temporal"]},
    {keyword:"bathe", region: ["Frontal","Occipital","Parietal"]},
    {keyword:"respect", region: ["Frontal","Temporal"]},
    {keyword:"conflict", region: ["Frontal","Temporal"]},
    {keyword:"forgiveness", region: ["Frontal","Temporal"]},
    {keyword:"compromise", region: ["Frontal","Temporal"]},
    {keyword:"innovation", region: ["Frontal"]},
    {keyword:"research", region: ["Frontal"]},
    {keyword:"data", region: ["Frontal","Temporal"]},
    {keyword:"algorithm", region: ["Frontal"]},
    {keyword:"artificial intelligence", region: ["Frontal"]},
    {keyword:"machine learning", region: ["Frontal"]},
    {keyword:"quantum", region: ["Frontal"]},
    {keyword:"robotics", region: ["Frontal","Parietal"]},
    {keyword:"software", region: ["Frontal"]},
    {keyword:"hardware", region: ["Frontal","Parietal"]},
    {keyword:"experiment", region: ["Frontal"]},
    {keyword:"theories", region: ["Frontal"]},
    {keyword:"physics", region: ["Frontal","Parietal"]},
    {keyword:"biology", region: ["Frontal","Temporal"]},
    {keyword:"chemistry", region: ["Frontal","Temporal","Parietal"]},
    {keyword:"simulation", region: ["Frontal"]},
    {keyword:"network", region: ["Frontal"]},
    {keyword:"engineering", region: ["Frontal"]},
    {keyword:"genetics", region: ["Frontal","Temporal"]},
    {keyword:"nanotechnology", region: ["Frontal"]},
    {keyword:"stairs", region: ["Frontal","Parietal"]},
    {keyword:"laundry room", region: ["Frontal","Parietal"]},
    {keyword:"bookshelf", region: ["Frontal","Parietal"]},
    {keyword:"clothes", region: ["Frontal"]},
    {keyword:"water bottles", region: ["Frontal","Parietal"]},
    {keyword:"fork", region: ["Frontal","Parietal"]},
    {keyword:"spoon", region: ["Frontal","Parietal"]},
    {keyword:"knife", region: ["Frontal","Parietal"]},
    {keyword:"coach", region: ["Frontal","Temporal"]},
    {keyword:"strategy", region: ["Frontal"]},
    {keyword:"victory", region: ["Frontal","Temporal"]},
    {keyword:"game", region: ["Frontal","Parietal"]},
    {keyword:"goal", region: ["Frontal","Parietal"]},
    {keyword:"referee", region: ["Frontal"]},
    {keyword:"practice", region: ["Frontal"]},
    {keyword:"tactics", region: ["Frontal"]},
    {keyword:"sportsmanship", region: ["Frontal","Temporal"]},
    {keyword:"match", region: ["Frontal"]},
    {keyword:"team", region: ["Frontal","Temporal"]},
    {keyword:"competition", region: ["Frontal","Temporal"]},
    {keyword:"athlete", region: ["Frontal","Temporal"]},
    {keyword:"fitness", region: ["Frontal"]},
    {keyword:"training", region: ["Frontal","Parietal"]},
    {keyword:"working out", region: ["Frontal","Parietal"]},
    {keyword:"endurance", region: ["Frontal"]},
    {keyword:"speed", region: ["Frontal","Parietal"]},
    {keyword:"strength", region: ["Frontal","Parietal"]},
    {keyword:"stamina", region: ["Frontal"]},
    {keyword:"meal", region: ["Frontal","Parietal"]},
    {keyword:"taste", region: ["Frontal","Parietal"]},
    {keyword:"restaurant", region: ["Frontal","Temporal"]},
    {keyword:"cuisine", region: ["Frontal","Temporal"]},
    {keyword:"appetizer", region: ["Frontal","Parietal"]},
    {keyword:"table", region: ["Frontal","Parietal"]},
    {keyword:"chef", region: ["Frontal","Temporal"]},
    {keyword:"beverage", region: ["Frontal","Parietal"]},
    {keyword:"dessert", region: ["Frontal","Parietal"]},
    {keyword:"friend", region: ["Frontal","Temporal"]},
    {keyword:"family", region: ["Frontal","Temporal"]},
    {keyword:"stranger", region: ["Frontal","Temporal"]},
    {keyword:"colleague", region: ["Frontal","Temporal"]},
    {keyword:"teacher", region: ["Frontal","Temporal"]},
    {keyword:"student", region: ["Frontal","Temporal"]},
    {keyword:"leader", region: ["Frontal"]},
    {keyword:"parent", region: ["Frontal","Temporal"]},
    {keyword:"child", region: ["Frontal","Temporal"]},
    {keyword:"partner", region: ["Frontal","Temporal"]},
    {keyword:"fashion", region: ["Frontal","Occipital"]},
    {keyword:"makeup", region: ["Frontal","Occipital","Parietal"]},
    {keyword:"nail polish", region: ["Frontal","Parietal"]},
    {keyword:"jewelry", region: ["Frontal","Parietal"]},
    {keyword:"handbag", region: ["Frontal","Parietal"]},
    {keyword:"shopping", region: ["Frontal","Parietal"]},
    {keyword:"perfume", region: ["Frontal","Parietal"]},
    {keyword:"skirts", region: ["Frontal","Occipital","Parietal"]},
    {keyword:"shorts", region: ["Frontal","Occipital","Parietal"]},
    {keyword:"skincare", region: ["Frontal","Parietal"]},
    {keyword:"chocolates", region: ["Frontal","Parietal"]},
    {keyword:"flower", region: ["Frontal","Temporal","Occipital"]},
    {keyword:"manicure", region: ["Frontal","Parietal"]},
    {keyword:"pedicure", region: ["Frontal","Parietal"]},
    {keyword:"pajamas", region: ["Frontal","Parietal"]},
    {keyword:"bling", region: ["Frontal","Occipital","Parietal"]},
    {keyword:"glitter", region: ["Frontal","Occipital","Parietal"]},
    {keyword:"heels", region: ["Frontal","Parietal"]},
    {keyword:"shoes", region: ["Frontal","Parietal"]},
    {keyword:"puzzles", region: ["Frontal","Temporal"]},
    {keyword:"board games", region: ["Frontal","Parietal"]},
    {keyword:"video games", region: ["Frontal","Occipital","Parietal"]},
    {keyword:"watching tv", region: ["Frontal","Occipital"]},
    {keyword:"pottery", region: ["Frontal","Occipital","Parietal"]},
    {keyword:"billiards", region: ["Frontal","Occipital","Parietal"]},
    {keyword:"photography", region: ["Frontal","Occipital"]},
    {keyword:"chess", region: ["Frontal","Temporal"]},
    {keyword:"journaling", region: ["Frontal","Temporal"]},
    {keyword:"scrapbooking", region: ["Frontal","Temporal","Parietal"]},
    {keyword:"galaxy", region: ["Frontal","Occipital"]},
    {keyword:"star", region: ["Frontal","Occipital"]},
    {keyword:"black hole", region: ["Frontal","Temporal"]},
    {keyword:"comet", region: ["Frontal","Temporal","Occipital"]},
    {keyword:"asteroid", region: ["Frontal","Temporal"]},
    {keyword:"nebula", region: ["Frontal","Temporal"]},
    {keyword:"orbit", region: ["Frontal","Temporal"]},
    {keyword:"satellite", region: ["Frontal","Temporal"]},
    {keyword:"astronaut", region: ["Frontal","Parietal"]},
    {keyword:"solar system", region: ["Frontal","Temporal"]},
    {keyword:"teammate", region: ["Frontal","Temporal"]},
    {keyword:"grilling", region: ["Frontal","Parietal"]},
    {keyword:"roasting", region: ["Frontal","Parietal"]},
    {keyword:"herbs", region: ["Frontal","Temporal"]},
    {keyword:"spices", region: ["Frontal","Temporal"]},
    {keyword:"organic", region: ["Frontal","Temporal"]},
    {keyword:"fresh", region: ["Frontal","Parietal"]},
    {keyword:"juice", region: ["Frontal","Temporal"]},
    {keyword:"water", region: ["Frontal","Temporal"]},
    {keyword:"beer", region: ["Frontal","Temporal"]},
    {keyword:"planet", region: ["Frontal","Temporal"]},
    {keyword:"sun", region: ["Frontal","Temporal","Occipital"]},
    {keyword:"energy", region: ["Frontal","Temporal"]},
    {keyword:"matter", region: ["Frontal","Temporal"]},
    {keyword:"formula", region: ["Frontal","Temporal"]},
    {keyword:"cell", region: ["Frontal"]},
    {keyword:"evolution", region: ["Frontal","Temporal"]},
    {keyword:"laboratory", region: ["Frontal","Parietal"]},
    {keyword:"ecology", region: ["Frontal"]},
    {keyword:"hypothesis", region: ["Frontal","Temporal"]},
    {keyword:"speaking", region: ["Frontal","Temporal","Occipital"]},
    {keyword:"listening", region: ["Frontal","Temporal","Parietal"]},
    {keyword:"writing an exam", region: ["Frontal","Temporal","Occipital","Parietal"]},
    {keyword:"playing an instrument", region: ["Frontal","Temporal","Occipital","Parietal"]},
    {keyword:"woodworking", region: ["Frontal","Temporal","Occipital","Parietal"]},
    {keyword:"driving", region: ["Frontal","Temporal","Occipital","Parietal"]}
];

export default function BaldSphereChat() {
  const [messages, setMessages] = useState([
    { sender: "assistant", text: "Hi! I'm your Brain Assistant. Type any action (like 'think', 'run', 'sing', or 'cook') and I'll show you which brain regions are responsible for it. Type 'help' for more examples!" }
  ]);
  const [input, setInput] = useState("");
  const [highlightedRegions, setHighlightedRegions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);
  // Add user_id retrieval (from localStorage)
  const user = JSON.parse(localStorage.getItem('user'));
  const user_id = user ? user.id : null;

  // Fetch chat history on mount
  useEffect(() => {
    if (!user_id) return;
    fetch(`https://baldmann-j659.vercel.app/api/history/${user_id}`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          // Use the most recent chat session
          setMessages(data[0].messages || []);
        }
      })
      .catch(() => {});
  }, [user_id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function findBrainData(userInput) {
    const input = userInput.toLowerCase().trim();
    let found = brainData.find(item => input === item.keyword.toLowerCase());
    if (found) return found;
    found = brainData.find(item => input.includes(item.keyword.toLowerCase()) && item.keyword.length > 2);
    if (found) return found;
    found = brainData.find(item => item.keyword.toLowerCase().includes(input) && input.length > 2);
    return found || null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const userInput = input.trim();
    if (!userInput) return;
    if (userInput.toLowerCase() === 'help' || userInput.toLowerCase() === 'examples') {
      const helpResponse = `Here are some actions you can try:\n\n **Thinking**: think, solve, remember, focus, decide\n🏃 **Movement**: run, walk, jump, dance, swim, climb\n🎵 **Sound**: sing, talk, whisper, shout, listen\n👁️ **Vision**: see, watch, read, look, stare\n🍽️ **Daily**: eat, cook, sleep, shower, brush\n🎨 **Creative**: paint, write, draw, play, create\n💪 **Sports**: exercise, lift, throw, kick, catch\n\nType any action to see which brain regions are involved!`;
      setMessages(prev => [...prev, { sender: "user", text: input }, { sender: "assistant", text: helpResponse }]);
      setInput("");
      return;
    }
    setMessages(prev => [...prev, { sender: "user", text: input }]);
    setInput("");
    setIsLoading(true);
    setMessages(prev => [...prev, { sender: "assistant", text: "Analyzing your request... Please wait while I process this." }]);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const found = findBrainData(userInput);
      let response;
      if (found) {
        setHighlightedRegions(found.region);
        response = ` **${found.keyword.toUpperCase()}** involves these brain regions:\n\n${found.region.map(region => `• **${region.replace('_', ' ').toUpperCase()}**`).join('\n')}\n\n${found.description}\n\nTry another action to explore more brain regions!`;
      } else {
        setHighlightedRegions([]);
        response = `I couldn't find specific brain data for \"${userInput}\". \n\nTry these actions instead:\n• think, run, sing, cook, read, dance, sleep, eat\n\nOr type 'help' for more examples!`;
      }
      setMessages(prev => [...prev.slice(0, -1), { sender: "assistant", text: response }]);
      // Removed: Save chat to backend after every message
    } catch (error) {
      setMessages(prev => [...prev.slice(0, -1), { sender: "assistant", text: "Sorry, I encountered an error. Please try again!" }]);
    } finally {
      setIsLoading(false);
    }
  }

  const handleReset = async () => {
    if (user_id && messages.length > 1) {
      await fetch('https://baldmann-j659.vercel.app/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id, messages })
      });
    }
    setMessages([
      { sender: "assistant", text: "Hi! I'm your Brain Assistant. Type any action (like 'think', 'run', 'sing', or 'cook') and I'll show you which brain regions are responsible for it. Type 'help' for more examples!" }
    ]);
    setHighlightedRegions([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center py-8 px-2 sm:px-4">
      <div className="w-full max-w-7xl flex flex-col md:flex-row rounded-2xl shadow-lg overflow-hidden bg-white/0">
        {/* Brain Visualization Left */}
        <div className="flex-1 flex items-center justify-center bg-gray-100 border-b md:border-b-0 md:border-r border-gray-200 min-h-[300px] md:min-h-[600px] h-[300px] md:h-auto">
          <div className="w-full h-full flex items-center justify-center">
            <Canvas camera={{ position: [0, 0, 4], fov: 60 }} style={{ width: '100%', height: '100%', background: 'transparent' }}>
              <ambientLight intensity={0.7} />
              <directionalLight position={[2, 2, 2]} intensity={0.5} />
              <BrainModel highlightedRegions={highlightedRegions} />
            </Canvas>
          </div>
        </div>
        {/* Chat Panel Right */}
        <div className="w-full max-w-md flex flex-col h-[400px] md:h-[600px] bg-yellow-50 border-t md:border-t-0 md:border-l border-gray-200">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-200 bg-yellow-100 sticky top-0 z-10">
            <div className="flex items-center gap-3">

              <div>
                <h2 className="text-xl font-bold text-yellow-700">Brain Assistant</h2>
                <p className="text-sm text-gray-700">Ask me about any action!</p>
              </div>
            </div>
          </div>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4 bg-yellow-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs md:max-w-sm px-4 py-3 rounded-2xl shadow-sm text-sm ${
                    message.sender === "user"
                      ? "bg-white text-yellow-900 border border-yellow-200"
                      : "bg-white/80 text-gray-800 border border-gray-200"
                  }`}
                >
                  <div className="whitespace-pre-wrap">{message.text}</div>
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          {/* Input */}
          <form onSubmit={handleSubmit} className="flex gap-2 px-4 py-4 border-t border-gray-200 bg-yellow-50 sticky bottom-0 z-10">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type any action: think, run, sing, cook..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-xl hover:bg-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? "..." : "Send"}
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="ml-2 px-3 py-3 rounded-xl bg-white border border-yellow-300 text-yellow-600 hover:bg-yellow-100 transition-colors"
              title="Reset chat"
            >
              <span className="text-lg">↺</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}