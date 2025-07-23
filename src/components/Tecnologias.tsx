"use client";
import {
  SiReact, SiNodedotjs, SiNextdotjs, SiTailwindcss, SiGraphql, SiKotlin,
  SiHtml5, SiDjango, SiFlask, SiOpenai, SiPostgresql, SiJavascript,
  SiVuetify, SiSqlite, SiFastapi, SiNestjs, SiMysql, SiAstro, SiAngular,
  SiGnubash, SiC, SiCplusplus, SiPython, SiCss3, SiTypescript, SiMongodb
} from "react-icons/si";
import { VscTerminalPowershell } from "react-icons/vsc";
import { FaGlobe, FaAndroid, FaApple, FaRegClock, FaTv, FaRocket } from "react-icons/fa";

export default function Tecnologias() {
  return (
    <section className="text-inverse section-tecnologias">
      <h2 className="text-h2 mb-8 text-center">
        Tecnologías en las que Trabajamos
      </h2>

      <div className="pt-8">
          <div className="cards-tecnologias">
            <div className="li-tecnologias">
              <FaGlobe className="icon-tecnologia" size={48} color="#fff" />
              <span>Website</span>
            </div>
            <div className="li-tecnologias">
              <FaAndroid className="icon-tecnologia" size={48} color="#fff" />
              <span>Android</span>
            </div>
            <div className="li-tecnologias">
              <FaApple className="icon-tecnologia" size={48} color="#fff" />
              <span>IOS</span>
            </div>
            <div className="li-tecnologias">
              <FaRegClock className="icon-tecnologia" size={48} color="#fff" />
              <span>Watch</span>
            </div>
            <div className="li-tecnologias">
              <FaTv className="icon-tecnologia" size={48} color="#fff" />
              <span>Tv</span>
            </div>
            <div className="li-tecnologias">
              <FaRocket className="icon-tecnologia" size={48} color="#fff" />
              <span>IA</span>
            </div>
          </div>
      </div>
    </section>
  );
}