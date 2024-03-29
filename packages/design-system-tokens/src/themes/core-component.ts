/*
 * Core CMSDS Component Theme
 */

import { default as t } from './core'
import { hexOpacity } from '../lib/colorUtils'
import { AnyTokenValues } from '../lib/types'

export const components: AnyTokenValues = {
  'accordion': {
    '__color':                                    t.color['base'],
    '__background-color':                         t.color['gray-lightest'],
    '__background-color--hover':                  t.color['gray-lighter'],
    '__border-color':                             t.color['gray-lightest'],
    '__border-radius':                            0,
    '__border-width':                             t.spacer['half'],
    '-button__color':                             t.color['base'],
    '-content__background-color':                 t.color['white'],
  },

  'alert': {
    '__background-color':                         t.color['info-lightest'],
    '__background-color--error':                  t.color['error-lightest'],
    '__background-color--lightweight':            t.color['white'],
    '__background-color--success':                t.color['success-lightest'],
    '__background-color--warn':                   t.color['warn-lightest'],
    '__border-left-color':                        t.color['info'],
    '__border-color--error':                      t.color['error'],
    '__border-color--success':                    t.color['success'],
    '__border-color--warn':                       t.color['warn'],
    '__font-color':                               t.color['base'],
    '__icon-size':                                '1.5rem',
    '__padding':                                  t.spacer['2'],
    '-bar__width':                                t.spacer['1'],
    '-link__font-color':                          t.color['primary-darker'],
    '-link__font-color--hover':                   t.color['primary-darkest'],
    '-link__font-color--focus':                   t.color['primary-darkest'],
    '-link__font-color--active':                  t.color['primary-darkest'],
  },

  'badge': {
    '__background-color':                         t.color['gray-dark'],
    '__background-color--alert':                  t.color['error'],
    '__background-color--info':                   t.color['primary'],
    '__background-color--success':                t.color['success'],
    '__background-color--warn':                   t.color['warn'],
    '__font-color':                               t.color['white'],
    '__font-color--alert':                        t.color['white'],
    '__font-color--info':                         t.color['white'],
    '__font-color--success':                      t.color['white'],
    '__font-color--warn':                         t.color['base'],
    '__border-radius':                            t.radius['pill'],
  },

  'button': {
    '__background-color--active':                 t.color['gray-lighter'],
    '__background-color--disabled':               'transparent',
    '__background-color--hover':                  t.color['gray-lightest'],
    '__background-color':                         'transparent',
    '__border-color--active':                     t.color['primary-darkest'],
    '__border-color--disabled':                   t.color['gray-lighter'],
    '__border-color--hover':                      t.color['primary-darker'],
    '__border-color':                             t.color['primary'],
    '__border-radius':                            t.radius['default'],
    '__border-width':                             '1px',
    '__color--active':                            t.color['primary-darkest'],
    '__color--disabled':                          t.color['gray-lighter'],
    '__color--hover':                             t.color['primary-darker'],
    '__color':                                    t.color['primary'],
    '__font-weight':                              t.font['weight-bold'],
  },

  'button-alt': {
    '__background-color--active':                 t.color['gray-lighter'],
    '__background-color--disabled':               'transparent',
    '__background-color--hover':                  t.color['gray-lightest'],
    '__background-color':                         'transparent',
    '__border-color--active':                     t.color['secondary-darkest'],
    '__border-color--disabled':                   t.color['gray-lighter'],
    '__border-color--hover':                      t.color['secondary-darker'],
    '__border-color':                             t.color['secondary'],
    '__color--active':                            t.color['secondary-darkest'],
    '__color--disabled':                          t.color['gray-lighter'],
    '__color--hover':                             t.color['secondary-darker'],
    '__color':                                    t.color['secondary'],
  },

  'button-dark': {
    '__background-color--active':                 'transparent',
    '__background-color--disabled':               'transparent',
    '__background-color--hover':                  'transparent',
    '__background-color':                         'transparent',
    '__border-color--active':                     t.color['gray-lighter'],
    '__border-color--disabled':                   t.color['gray-dark'],
    '__border-color--hover':                      t.color['white'],
    '__border-color':                             t.color['gray-lightest'],
    '__color--active':                            t.color['gray-lighter'],
    '__color--disabled':                          t.color['gray-dark'],
    '__color--hover':                             t.color['white'],
    '__color':                                    t.color['gray-lightest'],
  },

  'button-dark-alt': {
    '__background-color--active':                 'transparent',
    '__background-color--disabled':               'transparent',
    '__background-color--hover':                  'transparent',
    '__background-color':                         'transparent',
    '__border-color--active':                     t.color['secondary-light'],
    '__border-color--disabled':                   t.color['gray-dark'],
    '__border-color--hover':                      t.color['secondary-lightest'],
    '__border-color':                             t.color['secondary-lighter'],
    '__color--active':                            t.color['secondary-light'],
    '__color--disabled':                          t.color['gray-dark'],
    '__color--hover':                             t.color['secondary-lightest'],
    '__color':                                    t.color['secondary-lighter'],
  },

  'button-solid': {
    '__background-color--active':                 t.color['primary-darkest'],
    '__background-color--disabled':               t.color['gray-lighter'],
    '__background-color--hover':                  t.color['primary-darker'],
    '__background-color':                         t.color['primary'],
    '__border-color--active':                     t.color['primary-darkest'],
    '__border-color--disabled':                   t.color['gray-lighter'],
    '__border-color--hover':                      t.color['primary-darker'],
    '__border-color':                             t.color['primary'],
    '__color--active':                            t.color['white'],
    '__color--disabled':                          t.color['gray-darker'],
    '__color--hover':                             t.color['white'],
    '__color':                                    t.color['white'],
  },

  'button-solid-alt': {
    '__background-color--active':                 t.color['secondary-darkest'],
    '__background-color--disabled':               t.color['gray-lighter'],
    '__background-color--hover':                  t.color['secondary-darker'],
    '__background-color':                         t.color['secondary'],
    '__border-color--active':                     t.color['secondary-darkest'],
    '__border-color--disabled':                   t.color['gray-lighter'],
    '__border-color--hover':                      t.color['secondary-darker'],
    '__border-color':                             t.color['secondary'],
    '__color--active':                            t.color['white'],
    '__color--disabled':                          t.color['gray-darker'],
    '__color--hover':                             t.color['white'],
    '__color':                                    t.color['white'],
  },

  'button-solid-dark': {
    '__background-color--active':                 t.color['gray-lighter'],
    '__background-color--disabled':               t.color['gray-darker'],
    '__background-color--hover':                  t.color['white'],
    '__background-color':                         t.color['gray-lightest'],
    '__border-color--active':                     t.color['gray-lighter'],
    '__border-color--disabled':                   t.color['gray-darker'],
    '__border-color--hover':                      t.color['white'],
    '__border-color':                             t.color['gray-lightest'],
    '__color--active':                            t.color['base'],
    '__color--disabled':                          t.color['base'],
    '__color--hover':                             t.color['base'],
    '__color':                                    t.color['base'],
  },

  'button-solid-dark-alt': {
    '__background-color--active':                 t.color['secondary'],
    '__background-color--disabled':               t.color['gray-darker'],
    '__background-color--hover':                  t.color['secondary-lightest'],
    '__background-color':                         t.color['secondary-lighter'],
    '__border-color--active':                     t.color['secondary'],
    '__border-color--disabled':                   t.color['gray-darker'],
    '__border-color--hover':                      t.color['secondary-lightest'],
    '__border-color':                             t.color['secondary-lighter'],
    '__color--active':                            t.color['base'],
    '__color--disabled':                          t.color['base'],
    '__color--hover':                             t.color['base'],
    '__color':                                    t.color['base'],
  },

  'button-ghost': {
    '__background-color--active':                 'transparent',
    '__background-color--disabled':               'transparent',
    '__background-color--hover':                  'transparent',
    '__background-color':                         'transparent',
    '__border-color--active':                     'transparent',
    '__border-color--disabled':                   'transparent',
    '__border-color--hover':                      'transparent',
    '__border-color':                             'transparent',
    '__color--active':                            t.color['primary-darkest'],
    '__color--disabled':                          t.color['gray-lighter'],
    '__color--hover':                             t.color['primary-darker'],
    '__color':                                    t.color['primary'],
  },

  'button-ghost-alt': {
    '__background-color--active':                 'transparent',
    '__background-color--disabled':               'transparent',
    '__background-color--hover':                  'transparent',
    '__background-color':                         'transparent',
    '__border-color--active':                     'transparent',
    '__border-color--disabled':                   'transparent',
    '__border-color--hover':                      'transparent',
    '__border-color':                             'transparent',
    '__color--active':                            t.color['secondary-darkest'],
    '__color--disabled':                          t.color['gray-lighter'],
    '__color--hover':                             t.color['secondary-darker'],
    '__color':                                    t.color['secondary'],
  },

  'button-ghost-dark': {
    '__background-color--active':                 'transparent',
    '__background-color--disabled':               'transparent',
    '__background-color--hover':                  'transparent',
    '__background-color':                         'transparent',
    '__border-color--active':                     'transparent',
    '__border-color--disabled':                   'transparent',
    '__border-color--hover':                      'transparent',
    '__border-color':                             'transparent',
    '__color--active':                            t.color['gray-lighter'],
    '__color--disabled':                          t.color['gray-dark'],
    '__color--hover':                             t.color['white'],
    '__color':                                    t.color['gray-lightest'],
  },

  'button-ghost-dark-alt': {
    '__background-color--active':                 'transparent',
    '__background-color--disabled':               'transparent',
    '__background-color--hover':                  'transparent',
    '__background-color':                         'transparent',
    '__border-color--active':                     'transparent',
    '__border-color--disabled':                   'transparent',
    '__border-color--hover':                      'transparent',
    '__border-color':                             'transparent',
    '__color--active':                            t.color['secondary'],
    '__color--disabled':                          t.color['gray-dark'],
    '__color--hover':                             t.color['secondary-lightest'],
    '__color':                                    t.color['secondary-lighter'],
  },

  'choice': {
    '__background-color':                         t.color['background'],
    '__background-color--checked':                t.color['primary'],
    '__background-color--disabled':               t.color['gray-lighter'],
    '__background-color--inverse':                t.color['transparent'],
    '__background-color--disabled--inverse':      hexOpacity(t.color['muted-inverse'], 0.15),
    '__border-color':                             t.color['base'],
    '__border-color--checked':                    t.color['primary'],
    '__border-color--disabled':                   t.color['gray-light'],
    '__border-color--error':                      t.color['base'], // Don't use error border for choice in this theme
    '__border-color--error--inverse':             t.color['white'],
    '__border-color--inverse':                    t.color['white'],
    '__border-color--left':                       t.color['primary'],
    '__border-color--focus':                      t.color['primary-darker'],
    '__border-color--disabled--inverse':          t.color['gray-light'],
    '__border-radius':                            '0px',
    '__border-width':                             '2px',
    '__color--unchecked':                         t.color['white'],
    '__color--disabled':                          t.color['muted'],
    '__size':                                     t.spacer['4'],
    '__size--small':                              '20px',
    '__size-radio':                               '22px',
    '__size-radio--small':                        '12px',
    '-label__color--disabled':                    t.color['muted'],
    '-label__color--disabled--inverse':           t.color['muted-inverse'],
  },

  'day-picker': {
    '-button__background-color--hover':           t.color['primary-lightest'],
  },

  'dialog': {
    '__background-color':                         t.color['background'],
    '__padding':                                  t.spacer['4'],
    '-overlay__background-color':                 t.color['transparent-black-alpha50'],
  },

  'drawer': {
    '__animation-timing':                         t.animation['speed-2'],
    '__background-color':                         t.color['background'],
    '__border-color':                             t.color['border'],
    '-close__color':                              t.color['black'],
    '-header__background-color':                  t.color['gray-lightest'],
    '-footer__background-color':                  t.color['info-lightest'],
    '-toggle__background-color--hover':           t.color['info'],
    '-toggle__color--hover':                      t.color['white'],
    '-toggle__background-color--hover--inverse':  t.color['white'],
    '-toggle__color--hover--inverse':             t.color['gray-darker'],
  },

  'filter-chip': {
    '__border-radius':                            t.radius['pill'],
    '__background-color':                         t.color['primary-lightest'],
    '__border-color':                             t.color['primary'],
    '__color':                                    t.color['base'],
    '__background-color--active':                 t.color['primary'],
    '__border-color--active':                     t.color['primary'],
    '__color--active':                            t.color['white'],
    '-icon__color':                               t.color['base'],
    '-icon__color-active':                        t.color['white'],
    '-icon__container-size':                      '18px',
  },

  'form': {
    '__max-width':                                '460px',
    '__max-width--small':                         '6em',
    '__max-width--medium':                        '12em',
  },

  'hint': {
    '__color':                                    t.color['muted'],
    '__color--inverse':                           t.color['muted-inverse'],
  },

  'inline-error': {
    '__color':                                    t.color['error'],
    '__color--inverse':                           t.color['error-lighter'],
  },

  'label': {
    '__font-family':                              'inherit',
    '__font-size':                                'inherit',
    '__font-weight':                              t.font['weight-bold'],
    '__letter-spacing':                           'inherit',
    '__text-transform':                           'inherit',
  },

  'link': {
    '__color':                                    t.color['primary'],
    '__color--active':                            t.color['primary-darkest'],
    '__color--hover':                             t.color['primary-darker'],
    '__color--visited':                           t.color['visited'],
    '-inverse__color':                            t.color['base-inverse'],
    '-inverse__color--active':                    t.color['muted-inverse'],
    '-inverse__color--hover':                     t.color['muted-inverse'],
    '-inverse__color--visited':                   t.color['muted-inverse'],
    '__text-decoration-offset':                   'auto',
    '__text-decoration-thickness':                '1px',
    '__text-decoration-thickness--hover':         '1px',
  },

  'pagination': {
    '-link__color':                               t.color['primary'],
    '-link__color--hover':                        t.color['primary-darker'],
    '-link__color--active':                       t.color['primary-darkest'],
    '-link__color--focus':                        t.color['primary-darker'],
    '-link__color--disabled':                     t.color['gray-lighter'],
    '-current-page__color':                       t.color['base'],
    '-overflow__color':                           t.color['gray-dark'],
    '-page-count__color':                         t.color['gray-dark'],
  },

  'review': {
    '__border-color':                             t.color['border'],
  },

  'steplist': {
    '__color':                                    t.color['muted'],
    '__color--current':                           t.color['primary'],
    '__background-color--current':                t.color['primary'],
    '-step__color':                               t.color['muted'],
    '-step__border-color':                        t.color['border'],
    '-step__border-color--default':               t.color['muted'],
    '-step__color--current':                      t.color['white'],
    '-step__color--completed':                    t.color['base'],
    '-step__background-color--completed':         t.color['base'],
  },

  'spinner': {
    '__background-color':                         t.color['background'],
    '__color':                                    t.color['base'],
    '__background-color--inverse':                t.color['background-inverse'],
    '__color--inverse':                           t.color['white'],
  },

  'table': {
    '__padding':                                  t.spacer['2'],
    '__border-color':                             t.color['black'],
    '__background-color--striped':                t.color['gray-lightest'],
    '-header__background-color':                  t.color['gray-lightest'],
  },

  'tabs': {
    '__border-color':                             t.color['border'],
    '__background-color':                         t.color['background'],
    '__background-color--hover':                  t.color['background'],
    '__background-color--disabled':               t.color['gray-lighter'],
    '__background-color--selected':               t.color['background'],
    '__color':                                    t.color['base'],
    '__color--hover':                             t.color['primary'],
    '__color--active':                            t.color['primary-darker'],
    '__color--disabled':                          t.color['gray-darker'],
    '__color--selected':                          t.color['primary'],
    '__border-color--disabled':                   t.color['gray-lighter'],
    '__border-color--selected':                   t.color['primary'],
    '-panel__background-color':                   t.color['background'],
  },

  'text-input': {
    '__line-height':                              '1.3',
    '__background-color--disabled':               t.color['gray-lighter'],
    '__border-width':                             '2px',
    '__border-width--error':                      '3px',
    '__border-color':                             t.color['base'],
    '__border-color--disabled':                   t.color['gray-light'],
    '__border-color--error':                      t.color['error'],
    '__border-color--error--inverse':             t.color['error-lighter'],
    '__border-color--inverse':                    t.color['black'],
    '__color':                                    t.color['base'],
    '__divider-color':                            t.color['gray-light'],
    '__padding':                                  t.spacer['1'],
    '__border-radius':                            t.radius['default'],
  },

  'tooltip': {
    '__background-color':                         t.color['background'],
    '__border-color':                             t.color['gray-darker'],
    '__border-color--active':                     hexOpacity(t.color['primary'], 0.25),
    '__border-color--inverse-active':             hexOpacity(t.color['white'], 0.25),
    '__border-width':                             '1px',
    '__color':                                    t.color['base'],
    '__box-shadow-color':                         t.color['gray-light'],
    '-icon__color':                               t.color['primary'],
    '-icon__color--inverse':                      t.color['white'],
    '-trigger__color':                            t.color['primary'],
  },

  'typography-heading': {
    '__font-family':                              'inherit',
    '__font-weight':                              t.font['weight-bold'],
    '-4xl__font-weight':                          'inherit',
    '-3xl__font-weight':                          'inherit',
    '-lg__font-weight':                           t.font['weight-bold'],
    '-md__font-weight':                           t.font['weight-bold'],
    '-sm__font-weight':                           t.font['weight-normal'],
    '-sm__font-size':                             t.font['size-sm'],
    '-md__font-size':                             t.font['size-md'],
    '-lg__font-size':                             t.font['size-lg'],
    '-xl__font-size':                             t.font['size-xl'],
    '-2xl__font-size--mobile':                    t.font['size-2xl--mobile'],
    '-2xl__font-size':                            t.font['size-2xl'],
    '-3xl__font-size--mobile':                    t.font['size-3xl--mobile'],
    '-3xl__font-size':                            t.font['size-3xl'],
    '-4xl__font-size--mobile':                    t.font['size-4xl--mobile'],
    '-4xl__font-size':                            t.font['size-4xl'],
    '-5xl__font-size--mobile':                    t.font['size-5xl--mobile'],
    '-5xl__font-size--tablet':                    t.font['size-5xl--tablet'],
    '-5xl__font-size':                            t.font['size-5xl'],
  },

  'typography-body': {
    '__font-family':                              t.font['sans'],
  },

  'usa-banner': {
    '__background-color':                         t.color['gray-lightest'],
    '__color':                                    t.color['base'],
    '__max-width':                                t.global['site-max-width'],
    '-gutter-width':                              t.global['grid-gutter-width'],
    '-heading__font-family':                      t.font['sans'],
    '-heading__line-height':                      '1.1',
    '-heading__font-size':                        t.font['size-sm'],
    '-panel__font-family':                        t.font['sans'],
    '-panel__line-height':                        t.font['line-height-base'],
    '-panel__font-size':                          t.font['size-base'],
    '-link__color':                               t.color['primary'],
    '-domain-icon__color':                        t.color['primary'],
    '-security-icon__color':                      t.color['success-light'],
    '-close-button__background-color--mobile':    t.color['gray-lighter'],
    '-close-button__color--mobile':               t.color['primary'],
  },

  'vertical-nav': {
    '-item__background-color--hover':             t.color['gray-lightest'],
    '-item__color--hover':                        t.color['primary'],
    '-item__border-color':                        t.color['gray-dark'],
    '-label__color':                              t.color['base'],
    '-label-icon__color':                         t.color['base'],
    '-label__border-color--current':              t.color['primary'],
    '-label__color--current':                     t.color['primary'],
  },
};

export default components
