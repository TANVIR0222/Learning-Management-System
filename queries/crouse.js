import { Category } from "@/model/category.model"
import { Course } from "@/model/crouse.model"
import { Module } from "@/model/module.model"
import { Testimonial } from "@/model/testimonial.model"
import { User } from "@/model/user.mode"

export const getCourse = async() =>{
    const courses = await Course.find({}).populate({
        path: 'category',
        model : Category
    }).populate({
        path: 'instructor',
        model : User
    }).populate({
        path: "testimonials",
        model: Testimonial
    }).populate({
        path: "modules",
        model: Module
    });
    return courses
}