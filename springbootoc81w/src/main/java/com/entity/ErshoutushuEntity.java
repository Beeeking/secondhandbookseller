package com.entity;

import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.apache.commons.beanutils.BeanUtils;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.enums.FieldFill;
import com.baomidou.mybatisplus.enums.IdType;


/**
 * 二手图书
 * 数据库通用操作实体类（普通增删改查）
 * @author 
 * @email 
 * @date 2022-04-23 15:10:37
 */
@TableName("ershoutushu")
public class ErshoutushuEntity<T> implements Serializable {
	private static final long serialVersionUID = 1L;


	public ErshoutushuEntity() {
		
	}
	
	public ErshoutushuEntity(T t) {
		try {
			BeanUtils.copyProperties(this, t);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	/**
	 * 主键id
	 */
	@TableId
	private Long id;
	/**
	 * 图书名称
	 */
					
	private String tushumingcheng;
	
	/**
	 * 图书分类
	 */
					
	private String tushufenlei;
	
	/**
	 * 封面
	 */
					
	private String fengmian;
	
	/**
	 * 作者
	 */
					
	private String zuozhe;
	
	/**
	 * 出版社
	 */
					
	private String chubanshe;
	
	/**
	 * 成色
	 */
					
	private String chengse;
	
	/**
	 * 图书简介
	 */
					
	private String tushujianjie;
	
	/**
	 * 卖家账号
	 */
					
	private String maijiazhanghao;
	
	/**
	 * 卖家姓名
	 */
					
	private String maijiaxingming;
	
	/**
	 * 最近点击时间
	 */
				
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat 		
	private Date clicktime;
	
	/**
	 * 点击次数
	 */
					
	private Integer clicknum;
	
	/**
	 * 价格
	 */
					
	private Float price;
	
	
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat
	private Date addtime;

	public Date getAddtime() {
		return addtime;
	}
	public void setAddtime(Date addtime) {
		this.addtime = addtime;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	/**
	 * 设置：图书名称
	 */
	public void setTushumingcheng(String tushumingcheng) {
		this.tushumingcheng = tushumingcheng;
	}
	/**
	 * 获取：图书名称
	 */
	public String getTushumingcheng() {
		return tushumingcheng;
	}
	/**
	 * 设置：图书分类
	 */
	public void setTushufenlei(String tushufenlei) {
		this.tushufenlei = tushufenlei;
	}
	/**
	 * 获取：图书分类
	 */
	public String getTushufenlei() {
		return tushufenlei;
	}
	/**
	 * 设置：封面
	 */
	public void setFengmian(String fengmian) {
		this.fengmian = fengmian;
	}
	/**
	 * 获取：封面
	 */
	public String getFengmian() {
		return fengmian;
	}
	/**
	 * 设置：作者
	 */
	public void setZuozhe(String zuozhe) {
		this.zuozhe = zuozhe;
	}
	/**
	 * 获取：作者
	 */
	public String getZuozhe() {
		return zuozhe;
	}
	/**
	 * 设置：出版社
	 */
	public void setChubanshe(String chubanshe) {
		this.chubanshe = chubanshe;
	}
	/**
	 * 获取：出版社
	 */
	public String getChubanshe() {
		return chubanshe;
	}
	/**
	 * 设置：成色
	 */
	public void setChengse(String chengse) {
		this.chengse = chengse;
	}
	/**
	 * 获取：成色
	 */
	public String getChengse() {
		return chengse;
	}
	/**
	 * 设置：图书简介
	 */
	public void setTushujianjie(String tushujianjie) {
		this.tushujianjie = tushujianjie;
	}
	/**
	 * 获取：图书简介
	 */
	public String getTushujianjie() {
		return tushujianjie;
	}
	/**
	 * 设置：卖家账号
	 */
	public void setMaijiazhanghao(String maijiazhanghao) {
		this.maijiazhanghao = maijiazhanghao;
	}
	/**
	 * 获取：卖家账号
	 */
	public String getMaijiazhanghao() {
		return maijiazhanghao;
	}
	/**
	 * 设置：卖家姓名
	 */
	public void setMaijiaxingming(String maijiaxingming) {
		this.maijiaxingming = maijiaxingming;
	}
	/**
	 * 获取：卖家姓名
	 */
	public String getMaijiaxingming() {
		return maijiaxingming;
	}
	/**
	 * 设置：最近点击时间
	 */
	public void setClicktime(Date clicktime) {
		this.clicktime = clicktime;
	}
	/**
	 * 获取：最近点击时间
	 */
	public Date getClicktime() {
		return clicktime;
	}
	/**
	 * 设置：点击次数
	 */
	public void setClicknum(Integer clicknum) {
		this.clicknum = clicknum;
	}
	/**
	 * 获取：点击次数
	 */
	public Integer getClicknum() {
		return clicknum;
	}
	/**
	 * 设置：价格
	 */
	public void setPrice(Float price) {
		this.price = price;
	}
	/**
	 * 获取：价格
	 */
	public Float getPrice() {
		return price;
	}

}
